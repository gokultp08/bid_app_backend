import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Bid {
  @Field()
  id: string;

  @Field()
  productId: string; // foreign key

  @Field()
  owner: string;

  @Field()
  status: string;

  @Field()
  price: number;

  @Field()
  createdTime?: string;
}
