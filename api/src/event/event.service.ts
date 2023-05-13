import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Event } from './schema/event.schema';

import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventService {
  constructor(@InjectModel(Event.name) private eventModel: Model<Event>){}

  create(createEventDto: CreateEventDto): Promise<Event> {
    const createdEvent = new this.eventModel(createEventDto)
    return createdEvent.save()
  }

  findAll(): Promise<Event[]> {
    return this.eventModel.find().exec()
  }

  findOne(id: string): Promise<Event> {
    return this.eventModel.findById(id).exec()
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: string): Promise<Event> {
    return this.eventModel.findOneAndDelete({ _id: id }).exec()
  }
}


