import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ObjectId } from 'mongodb'

export class ValidateMongoId implements PipeTransform<string> {
  transform(value: string): string{
      if(ObjectId.isValid(value)){
          if((String)(new ObjectId(value)) === value)
              return value;        
          throw new BadRequestException({description: 'Can not cast to ObjectId'})
      }
      throw new BadRequestException({description: 'Can not cast to ObjectId'})
  }
}