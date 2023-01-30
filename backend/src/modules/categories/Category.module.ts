import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './Category.controller';
import { Category } from './Category.entity';
import { CategoryService } from './Category.service';

@Module({
  /** TypeOrmModule.forFeature([Category]) enables the Category module to inject Typeorm Repositories for the Category entity */
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
