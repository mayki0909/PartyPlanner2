import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { HydratedDocument } from 'mongoose'
import { User } from 'src/user/schema/user.schema'

export type EventDocument = HydratedDocument<Event>

@Schema()
export class Event {
  @ApiProperty({ type: String, required: true })
  @Prop({ required: true })
  name: string

  @ApiProperty({ type: String })
  @Prop()
  description: string

  @ApiProperty({ type: String })
  @Prop()
  location: string

  @ApiProperty({ type: Date })
  @Prop({ required: true })
  dateFrom: Date
  
  @ApiProperty({ type: Date })
  @Prop({ required: true })
  dateTo: Date

  @ApiProperty({ type: Boolean })
  @Prop({ default: false })
  public: boolean

  @ApiProperty({ type: User, readOnly: true })
  @Prop()
  owner: User

  @ApiProperty({ type: [User] })
  @Prop()
  admins: User[]

  @ApiProperty({ type: Date, readOnly: true })
  @Prop({ default: new Date() })
  creationDate: Date
}

export const EventSchema = SchemaFactory.createForClass(Event)
