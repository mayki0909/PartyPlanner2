import * as bcrypt from 'bcrypt';
import { Injectable, NotAcceptableException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { RegisterDto } from './dto/register-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(username: string, password: string) {
    const user = await this.userService.findOneByUsername(username)
    if (!user) throw new NotAcceptableException()
    if (!bcrypt.compareSync(password, user.password)) throw new UnauthorizedException()

    const payload = { 
      _id: user._id,
      username: user.username,
      email: user.email
    }

    return {
      accessToken: await this.jwtService.signAsync(payload)
    }
  }

  async register(register: RegisterDto) {
    const exists = await this.userService.usernameOrEmailExists(register.username, register.email)
    if (exists) throw new NotAcceptableException()
    if (register.password !== register.confirmPassword) throw new NotAcceptableException()
    const hash = bcrypt.hashSync(register.password, 10)

    const createUserDto: CreateUserDto = {
      name: register.name,
      lastname: register.lastname,
      username: register.username,
      email: register.email,
      password: hash,
      phone: '',
      drive: false,
      drink: false,
      vegan: false,
      eat: false
    }
    const user = await this.userService.create(createUserDto)

    return await this.login(user.username, user.password)
  }

}
