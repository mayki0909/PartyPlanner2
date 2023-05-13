import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { HydratedDocument } from 'mongoose'


export type EventDocument = HydratedDocument<User>

@Schema()
export class User {
  @ApiProperty({ type: String, readOnly: true})
  _id: string

  @ApiProperty({ type: String, required: true})
  @Prop({required: true})
  name: string

  @ApiProperty({ type: String })
  @Prop()
  lastname: string

  @ApiProperty({ type: String })
  @Prop()
  username: string

  @ApiProperty({ type: String })
  @Prop()
  email: string

  @ApiProperty({ type: String })
  @Prop()
  password: string

  @ApiProperty({ type: String })
  @Prop()
  phone: string

  @ApiProperty({ type: Boolean })
  @Prop({ default: false })
  drive: boolean

  @ApiProperty({ type: Boolean })
  @Prop({ default: false })
  drink: boolean

  @ApiProperty({ type: Boolean })
  @Prop({ default: false })
  vegan: boolean

  @ApiProperty({ type: Boolean })
  @Prop({ default: false })
  eat: boolean

  @ApiProperty({ type: Date, readOnly: true })
  @Prop({ default: new Date() })
  creationDate: Date
}

export const UserSchema = SchemaFactory.createForClass(User)