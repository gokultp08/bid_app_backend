import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { NewProduct } from 'src/graphql/utils/newproduct.model';
import { Product } from 'src/graphql/models/product.model';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getProductById(id: string): Promise<Product | null> {
    return this.productRepository.findOne(id);
  }

  async getProducts(): Promise<Product[]> {
    return this.productRepository.findAll()
  }

  async createProduct(data: NewProduct): Promise<Product> {
    // try {
    return this.productRepository.create(data);
    // } catch (error) {
    //   throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    // }
  }

  async update(params: any): Promise<string> {
    const { id, ...params_without_id } = params;

    return null;
  }

  async delete(id: string): Promise<string> {
    return null;
  }
}
