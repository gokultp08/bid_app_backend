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
  price: string;

  @Field()
  image: string;
}
