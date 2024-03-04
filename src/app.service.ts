import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  constructor(private appRepository: AppRepository) {}

  getHealth(): string {
    return `Running on port ${process.env.DATABASE_NAME}`;
  }

  getDataBaseTest(): any {
    return this.appRepository.getTest();
  }
}
