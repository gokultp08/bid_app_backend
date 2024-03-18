import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from 'src/graphql/models/product.model';
import {
  NewProduct,
  UpdateProductStatus,
} from 'src/graphql/utils/newproduct.model';
// import { Post, NewPost, UpdatePost } from 'src/graphql.schema';
// import { PubSub } from 'graphql-subscriptions';

// const pubSub = new PubSub();

@Resolver(Product)
export class ProductResolvers {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product])
  async getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Query((returns) => Product, { nullable: true })
  getProductById(@Args('id') id: string) {
    console.log('id', id);
    return this.productService.getProductById(id);
  }

  @Mutation((returns) => Product)
  createProduct(
    @Args('createProduct') createProduct: NewProduct,
  ): Promise<Product> {
    console.log('resolver', createProduct);
    return this.productService.createProduct(createProduct);
  }

  @Mutation((returns) => Product)
  updateProductStatus(
    @Args('updateProductStatus') product: UpdateProductStatus,
  ): Promise<Product> {
    console.log('resolver', product);
    return this.productService.updateProductStatus(product);
  }

  @Mutation((returns) => String)
  deleteProduct(@Args('id') id: string): Promise<string> {
    return this.productService.deleteProduct(id);
  }

  // @Subscription('productCreated')
  // postCreated() {
  //   // return pubSub.asyncIterator('postCreated');
  // }
}
