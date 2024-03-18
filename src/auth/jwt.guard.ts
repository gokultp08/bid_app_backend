import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().request;
    const token = this.extractTokenFromHeader(request.get('token'));

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const decodedToken = this.jwtService.verify(token);
      request.user = decodedToken;
      return true;
    } catch (error) {
      return false;
    }
  }

  private extractTokenFromHeader(headers: string): string | undefined {
    const [type, token] = headers.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
