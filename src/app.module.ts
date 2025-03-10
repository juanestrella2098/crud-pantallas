/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PantallaModule } from './pantallas/pantalla.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      process.env.MONGO_PUBLIC_URL!
    ),
    PantallaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
