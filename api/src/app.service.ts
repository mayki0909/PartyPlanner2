import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  health(): Date {
    return new Date();
  }
}
