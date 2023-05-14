import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemSchema } from './schema/item.schema';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from 'src/auth/jwt.config';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }]),
    JwtModule.registerAsync(jwtConfig),
  ],
  controllers: [ItemController],
  providers: [ItemService],
  exports: [ItemService]
})
export class ItemModule {}
