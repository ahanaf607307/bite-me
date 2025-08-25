import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FoodCardType } from "../TypeExport/ProductCardType";

type Props = {
  product: FoodCardType;
};

export function SmallProductCard({ product }: Props) {
  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-0">
        <div className="flex gap-3 items-start">
          <div className="flex-1/2  ">
            <Link href="/">
              <Image
                src={product.foodImage.trim() || "/placeholder.svg"}
                alt={product.foodName}
                width={140}
                height={40}
                className=" h-32 w-full  object-cover rounded-lg"
              />
            </Link>
          </div>
          <div className="flex-1/2 min-w-0">
            <Link href="/">
              <h3 className="text-sm h-12 dark:text-white dark:hover:text-blue-300 hover:text-blue-600 transition  transform duration-150 font-medium text-gray-900 line-clamp-2 mb-1">
                {product?.foodName.slice(0, 50)}
                {product?.foodName.length > 50 && "....."}
              </h3>
            </Link>
            <div className="flex items-center gap-1 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product?.foodRating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">
                ({product?.foodRating})
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-semibold">
                ${product.foodPrice}
              </span>
              <span className="text-gray-400 text-sm line-through">
                ${product?.discountPrice}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
