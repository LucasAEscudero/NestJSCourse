import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // remove properties that are not in the DTO
    forbidNonWhitelisted: true, // denegate non-whitelisted properties (bad request)
    transform: true, // transform the payload to the DTO type
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
