import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { CitySchema } from './schema/city.schema';
import { MongooseModule } from '@nestjs/mongoose'; // add this

@Module({
  imports: [MongooseModule.forFeature([{ name: 'City', schema: CitySchema }])], // add
  providers: [CityService],
  controllers: [CityController],
})
export class CityModule {}

// @
