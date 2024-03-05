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

  googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    return {
      message: 'User information from google',
      user: req.user,
    };
  }
}
