import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { Cat, CatDocument } from './schema/city.schema';
import { City } from './city.interface';
import { Model } from 'mongoose';

@Injectable()
export class CityService {
  constructor(@InjectModel('City') private readonly cityModel: Model<City>) {}

  getAll(): string {
    console.log('get all');
    // const posts = await this.cityModel.find().exec();
    return 'ok';
  }
  async getCities(cityName): Promise<City[]> {
    console.log('ciititie', cityName);
    const post = await this.cityModel.find({ nomCommune: cityName }).exec();
    return post;
  }
}
