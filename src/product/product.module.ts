import { Module } from '@nestjs/common';
import { ProductResolvers } from './product.resolver';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';
import { BidModule } from 'src/bid/bid.module';

@Module({
  providers: [ProductResolvers, ProductService, ProductRepository],
  imports: [BidModule],
})
export class ProductModule {}
