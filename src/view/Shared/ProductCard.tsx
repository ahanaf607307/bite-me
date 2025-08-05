// components/ProductCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import { ProductCardType } from "../TypeExport/ProductCardType";

type Props = {
  product: ProductCardType;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Card className="rounded-sm overflow-hidden  p-0 group hover:shadow-xl transition-all duration-300 shadow-md relative flex flex-col h-full min-h-[320px]">
      {product.isHot && (
        <Badge className="absolute top-3 left-3 z-10 px-3 bg-pink-500 text-white">
          Hot
        </Badge>
      )}

      <div className="flex justify-center overflow-hidden  relative h-44">
        <Image
          src={product.image}
          alt={product.name}
          className="object-cover  group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <CardContent className="flex flex-col justify-between flex-grow space-y-2 px-2 pb-4">
        <div className="flex flex-col gap-y-2">
          <p className="text-sm text-muted-foreground">{product?.category}</p>
          <h2 className="text-base h-12 font-semibold leading-snug">
            {product?.name.slice(0, 30)}
            {product?.name.length > 30 && "..."}
          </h2>
        </div>
        {/* footer */}

        <div className="flex flex-col  ">
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={14}
                fill={index < Math.round(product.rating) ? "#facc15" : "none"}
                stroke="#facc15"
              />
            ))}
            <span className="text-muted-foreground ml-1">
              ({product.rating.toFixed(1)})
            </span>
          </div>
          <p className="text-sm text-muted-foreground">By {product.brand}</p>

          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-2">
              <span className="text-emerald-600 font-semibold text-lg">
                ${product.price.toFixed(2)}
              </span>
              {product.oldPrice && (
                <span className="line-through text-sm text-muted-foreground">
                  ${product.oldPrice.toFixed(2)}
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
