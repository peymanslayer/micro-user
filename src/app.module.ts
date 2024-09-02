import { Module } from '@nestjs/common';
import { AppController } from '../src/presentaion/controllers/app.controller';
import { AppService } from './domain/services/app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
