import { StaticImageData } from "next/image";

// types/Product.ts
export interface FoodCardType {
  _id: number;
  foodName: string;
  foodDesc: string;
  foodCategory: string;
  foodBrand: string;
  foodRating: number;
  foodPrice: number;
  discountPrice?: number;
  foodImage: StaticImageData;
  isHot?: boolean;
}
