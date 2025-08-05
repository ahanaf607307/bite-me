import { StaticImageData } from "next/image";

// types/Product.ts
export interface ProductCardType {
  id: number;
  name: string;
  description: string;
  brand: string;
  rating: number;
  price: number;
  oldPrice?: number;
  image: StaticImageData;
  isHot?: boolean;
}
