import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { User } from './schema/user.schema';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { ValidateMongoId } from 'src/validators/MongoId';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Post()
  @ApiCreatedResponse({type: User})
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiCreatedResponse({type: [User]})
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({type: User})
  findOne(@Param('id', ValidateMongoId) id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  @ApiCreatedResponse({type: User})
  update(@Param('id', ValidateMongoId) id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  @ApiCreatedResponse({type: User})
  remove(@Param('id', ValidateMongoId) id: string): Promise<User> {
    return this.userService.remove(id);
  }
}
