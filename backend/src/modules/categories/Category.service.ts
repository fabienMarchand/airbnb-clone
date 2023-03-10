import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './Category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async getCategory() {
    return await this.categoryRepository.find();
  }

  async getOneCategory(id: number) {
    return await this.categoryRepository.findOne(id);
  }
}
