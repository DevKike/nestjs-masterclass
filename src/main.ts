import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  /*
  Swagger config
*/
  const config = new DocumentBuilder()
    .setTitle('NestJs Masterclass - Blog an API')
    .setDescription('Use the base API URL as http://localhost:3000')
    .setTermsOfService('http://localhost:3000/terms')
    .setLicense('MIT', 'http://localhost:3000/license')
    .addServer('http://localhost:3000', 'Local Development Server')
    .setVersion('1.0')
    .build();

  // Instantiate Document
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
