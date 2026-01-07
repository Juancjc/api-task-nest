import { NestFactory } from '@nestjs/core';
import 'dotenv/config'; // carrega automaticamente o .env

import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT ? Number(process.env.PORT) : 3000;
  const host = process.env.HOST ?? '0.0.0.0';

  const app = await NestFactory.create(AppModule);

  // Habilita encerramento correto
  app.enableShutdownHooks();

  await app.listen(port, host);

  const url = await app.getUrl();

  console.log('----------------------------------');
  console.log(`🚀 Aplicação iniciada`);
  console.log(`🌐 ${url}`);
  console.log(`📦 Ambiente: ${process.env.NODE_ENV ?? 'development'}`);
  console.log('----------------------------------');
}

bootstrap();
