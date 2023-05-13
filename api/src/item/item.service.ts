import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Item } from './schema/item.schema';

import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemService {
  constructor(@InjectModel(Item.name) private itemModel: Model<Item>) {}

  create(createItemDto: CreateItemDto): Promise<Item> {
    const createItem = new this.itemModel(createItemDto)
    return createItem.save()
  }

  findAll(): Promise<Item[]> {
    return this.itemModel.find().exec()
  }

  findOne(id: string): Promise<Item> {
    return this.itemModel.findById(id).exec()
  }

  update(id: string, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: string): Promise<Item> {
    return this.itemModel.findByIdAndDelete(id).exec()
  }
}
