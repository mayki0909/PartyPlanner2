import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { HydratedDocument } from 'mongoose'

export type EventDocument = HydratedDocument<Item>

@Schema()
export class Item {
  @ApiProperty({ type: String, readOnly: true})
  _id: string

  @ApiProperty({ type: String, required: true})
  @Prop({required: true})
  name: string

  @ApiProperty({ type: String, required: true})
  @Prop({required: true})
  description: string

  @ApiProperty({ type: String, required: true})
  @Prop({required: true})
  quantity: number

  @ApiProperty({ type: String, required: true})
  @Prop({required: true})
  price: number
}

export const ItemSchema = SchemaFactory.createForClass(Item)
