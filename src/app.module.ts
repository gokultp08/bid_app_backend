import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './helpers/utils/logger.middleware';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProductModule } from './product/product.module';
import { KnexModule } from 'nest-knexjs';
import { DatabaseConfigService } from './config/database.config.service';
import { AppRepository } from './app.repository';
import { AuthModule } from './auth/auth.module';
import { BidModule } from './bid/bid.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    KnexModule.forRootAsync({
      useClass: DatabaseConfigService,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
      context: ({ req }) => {
        return { request: req };
      },
    }),
    ProductModule,
    BidModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppRepository],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('v1/user');
    consumer.apply(LoggerMiddleware).forRoutes('v1/chat');
    // .forRoutes({ path: 'cats', method: RequestMethod.GET });
    // forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });
    //  .forRoutes(CatsController);
    // consumer.apply(cors(), helmet(), logger).forRoutes(CatsController);
  }
}
