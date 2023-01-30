import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateLocationDto, UpdateLocationDto } from './Location.dto';
import { LocationService } from './Location.service';

@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  /** List all locations in database with this endpoint */
  @Get()
  async getLocations() {
    return await this.locationService.getLocations();
  }

  @Get('/location/:id')
  async getOneLocation(@Param('id') id: number) {
    return await this.locationService.getOneLocation(id);
  }

  @Delete(':id')
  async deleteLocation(@Param('id') id: number) {
    return await this.locationService.deleteLocation(id);
  }

  @Post('/location/create')
  async createLocation(@Body() CreateLocationDto: CreateLocationDto) {
    return this.locationService.createLocation(CreateLocationDto);
  }

  // update todo
  @Put(':id')
  async updatePost(
    @Param('id') id: number,
    @Body() location: UpdateLocationDto,
  ) {
    return this.locationService.updateLocation(id, location);
  }
}
