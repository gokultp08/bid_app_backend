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

// type Product {
//   id: ID!
//   title: String!
//   description: String!
//   endTime: String!
//   owner: String
//   status: String!
//   price: String!
//   image: String
//   createdTime: String!
// }

// input NewProduct {
//   title: String!
//   description: String!
//   endTime: String!
//   owner: String
//   price: String!
//   image: String!
// }

// input UpdateProduct {
//   id: ID!
//   owner: String
//   status: String!
//   price: String!
// }

// type Query {
//   products: [Product!]!
//   product(id: ID!): Product
// }

// type Mutation {
//   createProduct(input: NewProduct!): Product!
//   updateProduct(input: UpdateProduct!): Product
//   deleteProduct(id: ID!): Product
// }

// type Subscription {
//   productCreated: Product
// }
