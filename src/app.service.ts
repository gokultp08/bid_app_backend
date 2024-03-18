import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
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
      throw new UnauthorizedException('Account doesnt exist');
    }

    //    "email": "jonsnow101808@gmail.com",
    // "firstName": "Jon",
    // "lastName": "Snow",
    // "picture": "https://lh3.googleusercontent.com/a/ACg8ocK5lGz-KCkqen811riAiyID-js59Y0bRISPZbf6mrJR=s96-c",
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvbnNub3cxMDE4MDhAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiSm9uIiwibGFzdE5hbWUiOiJTbm93IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0s1bEd6LUtDa3FlbjgxMXJpQWl5SUQtanM1OVkwYlJJU1BaYmY2bXJKUj1zOTYtYyIsImFjY2Vzc1Rva2VuIjoieWEyOS5hMEFkNTJOM19hdWlHWEJlNTc2RldZbkdYTmU3UVIybVR0ZzAxbS11OWVFc2dPczZQMmU1T1BaSW9nZWhHeVZ1ZWlHMlp3aWtQbEpwWGVKRzVKQkMtUGRVY1hQMTRkeHNCUUdzdGdSTmNpWVZvSW1hdGhkMVhjbGJjNGRRWlM3V3NSRVd6MzFNX19GM3ltQ2NyQjlGUURXQ1J4ZzBnVGZCcXRZN0lmYUNnWUtBWjRTQVJNU0ZRSEdYMk1pTmNQTHhpYzNjbjVPaGgyQmp2Y0lCdzAxNzEiLCJpYXQiOjE3MTA3NjU2MjUsImV4cCI6MTcxMTE5NzYyNX0.kTQXQz13m8GsXeaJS-oo0jG31KSTfMFfCygVdTcSgyQ"
    return {
      message: 'User information from google',
      user: req.user,
    };
  }
}
