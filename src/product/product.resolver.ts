import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { ProductService } from './product.service';
// import { Post, NewPost, UpdatePost } from 'src/graphql.schema';
// import { PubSub } from 'graphql-subscriptions';

// const pubSub = new PubSub();

@Resolver('Product')
export class ProductResolvers {
  constructor(private readonly productService: ProductService) {}

  @Query('products')
  async posts(): Promise<string[]> {
    return this.productService.findAll();
  }

  @Query('product')
  async post(@Args('id') args: string): Promise<string> {
    return this.productService.findOne(args);
  }

  @Mutation('createProduct')
  async create(@Args('input') args: string): Promise<string> {
    const createdPost = await this.productService.create(args);
    // pubSub.publish('postCreated', { postCreated: createdPost });
    return createdPost;
  }

  @Mutation('updateProduct')
  async update(@Args('input') args: string): Promise<string> {
    return this.productService.update(args);
  }

  @Mutation('deleteProduct')
  async delete(@Args('id') args: string): Promise<string> {
    return this.productService.delete(args);
  }

  @Subscription('productCreated')
  postCreated() {
    // return pubSub.asyncIterator('postCreated');
  }
}
