import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { CategoryService } from './category.service';
import { Category } from './schema/category.schema';
import { ValidateMongoId } from 'src/validators/MongoId';
import { AuthGuard } from 'src/auth/auth.guard';

import { CreateItemDto } from 'src/item/dto/create-item.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @UseGuards(AuthGuard)
  @Post()
  @ApiCreatedResponse({type: Category})
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  @ApiCreatedResponse({type: [Category]})
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({type: Category})
  findOne(@Param('id', ValidateMongoId) id: string) {
    return this.categoryService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  @ApiCreatedResponse({type: Category})
  update(@Param('id', ValidateMongoId) id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  @ApiCreatedResponse({type: Category})
  remove(@Param('id', ValidateMongoId) id: string) {
    return this.categoryService.remove(id);
  }

  /// EXTRA FUNCTIONS
  @UseGuards(AuthGuard)
  @Post(':id/item')
  @ApiCreatedResponse({type: Category})
  addItem(@Param('id', ValidateMongoId) id: string, @Body() createItemDto: CreateItemDto) {
    return this.categoryService.addItem(id, createItemDto)
  }

  @UseGuards(AuthGuard)
  @Delete(':id/item/:itemId')
  @ApiCreatedResponse({type: Category})
  removeItem(@Param('id', ValidateMongoId) id: string, @Param('itemId', ValidateMongoId) itemId: string) {
    return this.categoryService.removeItem(id, itemId)
  }

  @UseGuards(AuthGuard)
  @Post(':id/requestedItem')
  @ApiCreatedResponse({type: Category})
  addRequestedItem(@Param('id', ValidateMongoId) id: string, @Body() createItemDto: CreateItemDto) {
    return this.categoryService.addRequestedItem(id, createItemDto)
  }

  @UseGuards(AuthGuard)
  @Delete(':id/requestedItem/:itemId')
  @ApiCreatedResponse({type: Category})
  removeRequestedItem(@Param('id', ValidateMongoId) id: string, @Param('itemId', ValidateMongoId) itemId: string) {
    return this.categoryService.removeRequestedItem(id, itemId)
  }
}
