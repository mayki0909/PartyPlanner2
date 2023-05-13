import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { User } from './schema/user.schema';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto)
    return await createdUser.save()
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec()
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findById(id).exec()
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id).exec()
  }

  /// EXTRA FUNCTIONS

  async findOneByUsername(username: string): Promise<User> {
    return await this.userModel.findOne({ username }).exec()
  }

  async usernameOrEmailExists(username: string, email: string): Promise<boolean> {
    const user = await this.userModel.findOne({ $or: [{username}, {email}] }).exec()
    if (user) return true
    return false
  }
}
