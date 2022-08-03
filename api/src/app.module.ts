import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CityModule } from './city/city.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true, envFilePath: '.env'}),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.mtnzw.mongodb.net/graneet?retryWrites=true&w=majority`,
      { useNewUrlParser: true },
    ),
    CityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
