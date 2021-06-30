import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { config } from 'dotenv';

config({
  path: process.env.NODE_ENV.trim() === 'test' ? '.env.test' : '.env',
});

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://greggfeijon:${process.env.MONGODB_PASSWORD}@testingcluster.upqgg.mongodb.net/test`,
      { useFindAndModify: false },
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
