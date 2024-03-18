import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class NewProduct {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  endTime: string;

  @Field()
  owner: string;

  @Field()
  price: number;

  @Field()
  image: string;
}

@InputType()
export class UpdateProductStatus {
  @Field()
  id: string;

  @Field()
  status: string;
}
