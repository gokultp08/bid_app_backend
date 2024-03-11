import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { ExternalExceptionFilter } from '@nestjs/core/exceptions/external-exception-filter';
import { Response, Request } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExternalExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    console.log('status', status, exception.message, response);

    response.status(status).send({
      statusCode: status,
      timestamp: new Date().toISOString(),
      message: exception.message,
    });
  }
}
