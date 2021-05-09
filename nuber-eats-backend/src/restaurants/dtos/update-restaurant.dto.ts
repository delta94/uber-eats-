import { createRestaurantDto } from './create-restaurant.dto';
import {
  ArgsType,
  Field,
  InputType,
  PartialType,
  ObjectType,
} from '@nestjs/graphql';

@InputType()
export class UpdateRestaurantInputType extends PartialType(
  createRestaurantDto,
) {}

@ArgsType()
export class UpdateRestaurantDto {
  @Field((type) => Number)
  id: number;

  @Field((type) => UpdateRestaurantInputType)
  data: UpdateRestaurantInputType;
}
