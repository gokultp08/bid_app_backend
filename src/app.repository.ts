import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';

@Injectable()
export class AppRepository {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async getTest(): Promise<any> {
    const result = await this.knex.raw('SELECT * FROM "public"."user"');
    return result.rows;
  }

}
