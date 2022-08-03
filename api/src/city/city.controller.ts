import {
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Res,
} from '@nestjs/common';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(private cityService: CityService) {}
  @Get('/')
  async getAll(@Res() res) {
    const posts = await this.cityService.getAll();
    return res.status(HttpStatus.OK).json(posts);
  }
  @Get('/find/:cityName')
  async getPost(@Res() res, @Param('cityName') cityName) {
    const post = await this.cityService.getCities(cityName);
    if (!post) {
      throw new NotFoundException('No city found!');
    }
    return res.status(HttpStatus.OK).json(post);
  }
}
