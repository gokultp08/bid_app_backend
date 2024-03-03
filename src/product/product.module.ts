import { Module } from '@nestjs/common';
import { ProductResolvers } from './product.resolver';
import { ProductService } from './product.service';

@Module({
  providers: [ProductResolvers, ProductService],
  imports: [],
})
export class ProductModule {}
