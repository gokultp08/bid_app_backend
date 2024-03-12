import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Args, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { Product } from 'src/graphql/models/product.model';
import { NewProduct } from 'src/graphql/utils/newproduct.model';
import { ProductStatus } from 'src/helpers/enums';
import { mapProductRowToProduct } from 'src/helpers/mapper';
import { v4 as uuid } from 'uuid';

export class ProductRepository {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async findOne(id: string): Promise<Product | null> {
    const result = await this.knex.raw('SELECT * FROM products where id = ?', [
      id,
    ]);
    return mapProductRowToProduct(result?.rows[0]);
  }

  async findAll(): Promise<Product[]> {
    const result = await this.knex.raw('SELECT * FROM products');
    return result.rows.map((item) => mapProductRowToProduct(item));
  }

  async create(data: NewProduct): Promise<Product> {
    throw new HttpException('soemtjing happened', HttpStatus.NOT_ACCEPTABLE);
    await this.knex.raw(`CREATE TABLE IF NOT EXISTS products (
    id VARCHAR(255) PRIMARY KEY,title VARCHAR(255) NOT NULL,description TEXT NOT NULL,endTime TIMESTAMP NOT NULL,
    owner VARCHAR(255),status VARCHAR(255) NOT NULL,price DECIMAL(10, 2) NOT NULL,image VARCHAR(255) NOT NULL,
    createdTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`);

    const id = String(uuid());
    await this.knex.raw(
      `INSERT INTO products (id, title, description, endTime, owner, status, price, image) VALUES(?,?,?,?,?,?,?,?)`,
      [
        id,
        data.title,
        data.description,
        data.endTime,
        data.owner,
        ProductStatus.CREATED.toString(),
        data.price,
        data.image,
      ],
    );

    const fetchData = await this.knex.raw(
      'SELECT * FROM products where id = ?',
      [id],
    );
    return this.findOne(id);
  }

  async update(params: any): Promise<string> {
    const { id, ...params_without_id } = params;

    return null;
  }

  async delete(id: string): Promise<string> {
    return null;
  }
}
