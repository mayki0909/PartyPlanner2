import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { Event, EventSchema } from './schema/event.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from 'src/auth/jwt.config';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }]),
    JwtModule.registerAsync(jwtConfig),
  ],
  controllers: [EventController],
  providers: [EventService]
})
export class EventModule {}
