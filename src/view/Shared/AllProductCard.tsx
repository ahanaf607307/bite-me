import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProductCardProps {
  image: StaticImageData;
  title: string;
  rating: number;
  reviewCount: number;
  currentPrice: number;
  originalPrice: number;
}

export function SmallProductCard({
  image,
  title,
  rating,
  currentPrice,
  originalPrice,
}: ProductCardProps) {
  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-0">
        <div className="flex gap-3 items-start">
          <div className="w-24 h-24 flex-shrink-0">
            <Link href="/">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                className=" h-full w-full object-cover rounded-lg"
              />
            </Link>
          </div>
          <div className="flex-1 min-w-0">
            <Link href="/">
              <h3 className="text-sm h-12 dark:text-white dark:hover:text-blue-300 hover:text-blue-600 transition  transform duration-150 font-medium text-gray-900 line-clamp-2 mb-1">
                {title.slice(0, 50)}
                {title.length > 50 && "....."}
              </h3>
            </Link>
            <div className="flex items-center gap-1 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">({rating})</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-semibold">
                ${currentPrice.toFixed(2)}
              </span>
              <span className="text-gray-400 text-sm line-through">
                ${originalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
