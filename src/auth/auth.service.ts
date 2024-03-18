import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async issueToken(userData: any): Promise<string> {
    return this.jwtService.signAsync(userData);
  }
}
