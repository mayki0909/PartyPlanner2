import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { EventService } from './event.service';
import { Event } from './schema/event.schema';
import { ValidateMongoId } from 'src/validators/MongoId';
import { AuthGuard } from 'src/auth/auth.guard';

import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@ApiTags('Events')
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @UseGuards(AuthGuard)
  @Post()
  @ApiCreatedResponse({type: Event})
  create(@Body() createEventDto: CreateEventDto): Promise<Event> {
    return this.eventService.create(createEventDto)
  }

  @Get()
  @ApiCreatedResponse({type: [Event]})
  findAll(): Promise<Event[]> {
    return this.eventService.findAll()
  }

  @Get(':id')
  @ApiCreatedResponse({type: Event})
  findOne(@Param('id', ValidateMongoId) id: string): Promise<Event> {
    return this.eventService.findOne(id)
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  @ApiCreatedResponse({type: Event})
  update(@Param('id', ValidateMongoId) id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(+id, updateEventDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  @ApiCreatedResponse({type: Event})
  remove(@Param('id', ValidateMongoId) id: string) {
    return this.eventService.remove(id);
  }
}
