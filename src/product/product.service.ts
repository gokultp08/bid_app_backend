import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import {
  NewProduct,
  UpdateProductStatus,
} from 'src/graphql/utils/product-input.model';
import { Product } from 'src/graphql/models/product.model';
import { ProductStatus } from 'src/helpers/enums';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getProductById(id: string): Promise<Product | null> {
    return this.productRepository.findOne(id);
  }

  async getProducts(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  async createProduct(data: NewProduct): Promise<Product> {
    return this.productRepository.create(data);
  }

  async updateProductStatus(data: UpdateProductStatus): Promise<Product> {
    const oldData = await this.getProductById(data.id);
    return this.productRepository.update(data.id, {
      status: data.status,
    });
  }

  async deleteProduct(id: string): Promise<string> {
    return this.productRepository.delete(id);
  }
}
