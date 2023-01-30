import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

/**
 * This dto is used to control user inputs and make sure it is valid data to create locations.
 * If the input provided to the endpoint does not match the rules defined by decorators here,
 * the endpoint will immediately return an error.
 * More info here: https://docs.nestjs.com/techniques/validation
 */

/**
 * TODO implement
 */
export class ExampleLocationDto {
  @IsString()
  xxx: string;

  @IsDate()
  @Type(() => Date)
  yyyy: Date;

  @IsNumber()
  zzzz: number;
}

export class CreateLocationDto {
  @IsNumber()
  id: number;
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsString()
  location: string;
  @IsString()
  picture: string;
  @IsNumber()
  stars: number;
  @IsNumber()
  numberOfRooms: number;
  @IsNumber()
  price: number;
  @IsNumber()
  categoryId: number;
}

export class UpdateLocationDto {
  @IsNumber()
  id: number;
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsString()
  location: string;
  @IsString()
  picture: string;
  @IsNumber()
  stars: number;
  @IsNumber()
  numberOfRooms: number;
  @IsNumber()
  price: number;
  @IsNumber()
  categoryId: number;
}
