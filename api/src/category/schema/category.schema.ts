import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { HydratedDocument } from 'mongoose'
import { Item } from 'src/item/schema/item.schema'

export type EventDocument = HydratedDocument<Category>

@Schema()
export class Category {
  @ApiProperty({ type: String, readOnly: true})
  _id: string

  @ApiProperty({ type: String, required: true})
  @Prop({required: true})
  name: string

  @ApiProperty({ type: String, required: true})
  @Prop({required: true})
  icon: string

  @ApiProperty({ type: [Item]})
  @Prop({ default: []})
  items: Item[]

  @ApiProperty({ type: [Item]})
  @Prop({ default: []})
  requestedItems: Item[]
}

export const CategorySchema = SchemaFactory.createForClass(Category)
