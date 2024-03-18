import { Module } from '@nestjs/common';
import { ProductResolvers } from './product.resolver';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';
import { BidModule } from 'src/bid/bid.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@Module({
  providers: [
    ProductResolvers,
    ProductService,
    ProductRepository,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  imports: [BidModule],
})
export class ProductModule {}
