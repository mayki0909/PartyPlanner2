import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './schema/category.schema';
import { ItemModule } from '../item/item.module';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from 'src/auth/jwt.config';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]),
    ItemModule,
    JwtModule.registerAsync(jwtConfig),
  ],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
