import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Category } from './schema/category.schema';
import { ItemService } from '../item/item.service';

import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateItemDto } from '../item/dto/create-item.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
    private itemService: ItemService
  ) {}

  create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const createCategory = new this.categoryModel(createCategoryDto)
    return createCategory.save()
  }

  findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec()
  }

  findOne(id: string): Promise<Category> {
    return this.categoryModel.findById(id).exec()
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: string): Promise<Category> {
    return this.categoryModel.findByIdAndDelete(id).exec()
  }

  /// EXTRA FUNCTIONS
  addItem(categoryId: string, itemDto: CreateItemDto) {
    const item = this.itemService.create(itemDto)
    const updatedCategory = this.categoryModel.findByIdAndUpdate({
      _id: categoryId
    }, {
      $push: { items: item }
    }, {
      new: true
    })

    return updatedCategory
  }

  removeItem(categoryId: string, itemId: string) {
    const updatedCategory = this.categoryModel.findByIdAndUpdate({
      _id: categoryId,
    }, {
      $pull: { items: { _id: itemId } }
    }, {
      new: true
    })

    return updatedCategory
  }

  addRequestedItem(categoryId: string, itemDto: CreateItemDto) {
    const item = this.itemService.create(itemDto)
    const updateCategory = this.categoryModel.findByIdAndUpdate({
      _id: categoryId
    }, {
      $push: { requestedItems: item }
    }, {
      new: true
    })

    return updateCategory
  }

  removeRequestedItem(categoryId: string, itemId: string) {
    const updatedCategory = this.categoryModel.findByIdAndUpdate({
      _id: categoryId,
    }, {
      $pull: { requestedItems: { _id: itemId } }
    }, {
      new: true
    })

    return updatedCategory
  }
}
