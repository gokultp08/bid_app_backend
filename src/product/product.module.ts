import { Module } from '@nestjs/common';
import { ProductResolvers } from './product.resolver';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';

@Module({
  providers: [ProductResolvers, ProductService, ProductRepository],
  imports: [],
})
export class ProductModule {}
