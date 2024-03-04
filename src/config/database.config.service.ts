import { Injectable } from '@nestjs/common';
import { KnexModuleOptions, KnexOptionsFactory } from 'nest-knexjs';

@Injectable()
export class DatabaseConfigService implements KnexOptionsFactory {
  createKnexOptions(): KnexModuleOptions | Promise<KnexModuleOptions> {
    return this.getKnexConfig();
  }

  getKnexConfig(): KnexModuleOptions {
    return {
      config: {
        client: 'pg',
        connection: {
          host: process.env.DATABASE_HOST,
          port: parseInt(process.env.DATABASE_PORT, 10),
          user: process.env.DATABASE_USER || 'root',
          password: process.env.DATABASE_PASSWORD || 'root',
          database: process.env.DATABASE_NAME,
        },
      },
    };
  }
}
