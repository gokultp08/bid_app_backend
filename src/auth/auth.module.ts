import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { GoogleService } from './google.service';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './jwt.guard';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'google' }),
    JwtModule.register({
      global: true,
      secret: 'secret_key_for_login',
      signOptions: { expiresIn: '5d' },
    }),
  ],
  providers: [GoogleService, AuthService, JwtAuthGuard],
  exports: [JwtAuthGuard],
})
export class AuthModule {}
