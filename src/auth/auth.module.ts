import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { GoogleService } from './google.service';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'google' })],
  providers: [GoogleService],
})
export class AuthModule {}
