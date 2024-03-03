import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './utils/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
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
