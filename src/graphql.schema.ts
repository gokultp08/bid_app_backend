
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NewProduct {
    title: string;
    description: string;
    endTime: string;
    owner?: Nullable<string>;
    status: string;
    price: string;
    image: string;
}

export class UpdateProduct {
    id: string;
    owner?: Nullable<string>;
    status: string;
    price: string;
}

export class Product {
    id: string;
    title: string;
    description: string;
    endTime: string;
    owner?: Nullable<string>;
    status: string;
    price: string;
    image: string;
}

export abstract class IQuery {
    abstract products(): Product[] | Promise<Product[]>;

    abstract product(id: string): Nullable<Product> | Promise<Nullable<Product>>;
}

export abstract class IMutation {
    abstract createProduct(input: NewProduct): Product | Promise<Product>;

    abstract updateProduct(input: UpdateProduct): Nullable<Product> | Promise<Nullable<Product>>;

    abstract deleteProduct(id: string): Nullable<Product> | Promise<Nullable<Product>>;
}

export abstract class ISubscription {
    abstract productCreated(): Nullable<Product> | Promise<Nullable<Product>>;
}

type Nullable<T> = T | null;
