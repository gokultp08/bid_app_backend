import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class NewBid {
  @Field()
  productId: string; // foreign key

  @Field()
  owner: string;

  @Field()
  price: number;
}

@InputType()
export class UpdateBidStatus {
  @Field()
  id: string;

  @Field()
  status: string;
}
