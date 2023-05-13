import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ItemService } from './item.service';
import { Item } from './schema/item.schema';
import { ValidateMongoId } from 'src/validators/MongoId';
import { AuthGuard } from 'src/auth/auth.guard';

import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@ApiTags('Items')
@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @UseGuards(AuthGuard)
  @Post()
  @ApiCreatedResponse({type: Item})
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemService.create(createItemDto);
  }

  @Get()
  @ApiCreatedResponse({type: [Item]})
  findAll() {
    return this.itemService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({type: Item})
  findOne(@Param('id', ValidateMongoId) id: string) {
    return this.itemService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  @ApiCreatedResponse({type: Item})
  update(@Param('id', ValidateMongoId) id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemService.update(id, updateItemDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  @ApiCreatedResponse({type: Item})
  remove(@Param('id', ValidateMongoId) id: string) {
    return this.itemService.remove(id);
  }
}
