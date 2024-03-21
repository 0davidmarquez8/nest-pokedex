import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2')

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina las propiedades que no pertenecen al DTO y estan en el body
      forbidNonWhitelisted: true
    })
  )

  await app.listen(3000);
}
bootstrap();
