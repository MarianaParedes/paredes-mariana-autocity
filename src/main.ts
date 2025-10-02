import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { envs } from './config';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
  new ValidationPipe({ //trabaja junto al classvalidator
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  await app.listen(envs.port);
  console.log(`Servidor corriendo en el puerto ${envs.port}`);
}
bootstrap();
