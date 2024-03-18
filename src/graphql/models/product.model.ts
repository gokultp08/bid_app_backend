import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UUID } from 'crypto';

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
  price: string;

  @Field({ nullable: true })
  image?: string;

  @Field()
  createdTime?: string;
}
