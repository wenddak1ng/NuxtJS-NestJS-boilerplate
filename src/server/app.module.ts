import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { NuxtController } from './nuxt.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, NuxtController],
  providers: [AppService],
})
export class AppModule {}
