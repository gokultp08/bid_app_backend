import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  endTime: string;

  @Field()
  owner: string;

  @Field()
  status: string;

  @Field()
  price: number;

  @Field({ nullable: true })
  image?: string;

  @Field()
  createdTime?: string;
}
