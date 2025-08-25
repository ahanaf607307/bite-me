// components/ProductCard.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import { FoodCardType } from "../TypeExport/ProductCardType";

type Props = {
  product: FoodCardType;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Card className="rounded-sm overflow-hidden  p-0 group hover:shadow-xl transition-all duration-300 shadow-md relative flex flex-col h-full min-h-[320px]">
      {product?.isHot && (
        <Badge className="absolute top-3 left-3 z-10 px-3 bg-pink-500 text-white">
          Hot
        </Badge>
      )}

      <div className="flex justify-center overflow-hidden  relative h-44">
        <Image
          src={product.foodImage.trim()}
          alt={product.foodName}
          layout="fill"
          className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <CardContent className="flex flex-col justify-between flex-grow space-y-2 px-2 pb-4">
        <div className="flex flex-col gap-y-2">
          <p className="text-sm text-muted-foreground">
            {product?.foodCategory}
          </p>
          <h2 className="text-base h-12 font-semibold leading-snug">
            {product?.foodName?.slice(0, 30)}
            {product?.foodName?.length > 30 && "..."}
          </h2>
        </div>
        {/* footer */}

        <div className="flex flex-col  ">
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={14}
                fill={
                  index < Math.round(product.foodRating) ? "#facc15" : "none"
                }
                stroke="#facc15"
              />
            ))}
            <span className="text-muted-foreground ml-1">
              ({product.foodRating})
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            By {product.foodBrand}
          </p>

          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-2">
              <span className="text-emerald-600 font-semibold text-lg">
                ${product.foodPrice}
              </span>
              {product.discountPrice && (
                <span className="line-through text-sm text-muted-foreground">
                  ${product.discountPrice}
                </span>
              )}
            </div>
            <Button size="sm" className="px-5 cursor-pointer" variant="outline">
              Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
