import { Injectable } from '@nestjs/common';
// import { NewPost, UpdatePost } from 'src/graphql.schema';

@Injectable()
export class ProductService {
  constructor() {}

  async findOne(id: string): Promise<string | null> {
    return null;
  }

  async findAll(): Promise<string[]> {
    return null;
  }

  async create(input: any): Promise<string> {
    return null;
  }

  async update(params: any): Promise<string> {
    const { id, ...params_without_id } = params;

    return null;
  }

  async delete(id: string): Promise<string> {
    return null;
  }
}
