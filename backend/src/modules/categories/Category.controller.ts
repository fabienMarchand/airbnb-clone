import { Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from './Category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  /** List all Categorys in database with this endpoint */
  @Get()
  async getCategory() {
    return await this.categoryService.getCategory();
  }

  @Get('/:id')
  async getOneCategory(@Param('id') id: number) {
    return await this.categoryService.getOneCategory(id);
  }
}
