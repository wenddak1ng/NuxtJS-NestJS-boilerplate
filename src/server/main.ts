import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { greenBright, whiteBright } from 'chalk';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.APP_PORT);
  console.log(
    greenBright(`[Info] App started at`),
    whiteBright(`:${process.env.APP_PORT}`),
  );
}
bootstrap();
