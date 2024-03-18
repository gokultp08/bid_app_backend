import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
  Context,
} from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from 'src/graphql/models/product.model';
import {
  NewProduct,
  UpdateProductStatus,
} from 'src/graphql/utils/product-input.model';
import { Bid } from 'src/graphql/models/bid.model';
import { BidService } from 'src/bid/bid.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@Resolver(Product)
@UseGuards(JwtAuthGuard)
export class ProductResolvers {
  constructor(
    private readonly productService: ProductService,
    private readonly bidService: BidService,
  ) {}

  @Query(() => [Product])
  async getProducts(@Context() context): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Query((returns) => Product, { nullable: true })
  getProductById(@Args('id') id: string, @Context() context) {
    // console.log('context', context.request.user);
    return this.productService.getProductById(id);
  }

  @Mutation((returns) => Product)
  createProduct(
    @Args('createProduct') createProduct: NewProduct,
  ): Promise<Product> {
    return this.productService.createProduct(createProduct);
  }

  @Mutation((returns) => Product)
  updateProductStatus(
    @Args('updateProductStatus') product: UpdateProductStatus,
  ): Promise<Product> {
    return this.productService.updateProductStatus(product);
  }

  @Mutation((returns) => String)
  deleteProduct(@Args('id') id: string): Promise<string> {
    return this.productService.deleteProduct(id);
  }

  @ResolveField(() => [Bid])
  async bids(@Parent() product: Product): Promise<Bid[]> {
    console.log('bidsss', product);
    return this.bidService.getBidsbyProductId(product.id);
  }
}
