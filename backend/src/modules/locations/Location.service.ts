import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './Location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async getLocations() {
    return await this.locationRepository.find();
  }

  async getOneLocation(id: number) {
    return await this.locationRepository.findOne(id);
  }

  async deleteLocation(id: number) {
    return await this.locationRepository.delete(id);
  }

  async createLocation(location) {
    console.log(location);
    return await this.locationRepository.save(location);
  }

  // update
  async updateLocation(id: number, location) {
    try {
      await this.locationRepository.update(id, location);
      return await this.locationRepository.findOne(id);
    } catch (error) {
      console.log(error);
    }
  }
}
