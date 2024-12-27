import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Record<string, string> {
    return { name: 'Christian Antonio'};
  }
}
