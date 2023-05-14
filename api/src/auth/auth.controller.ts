import { Body, Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-auth.dto';
import { AuthGuard } from './auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RegisterDto } from './dto/register-auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto.username, loginDto.password)
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return await this.authService.register(registerDto)
  }
  
  @Get('test')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async test(@Request() request) {
    return request.user
  }
}
