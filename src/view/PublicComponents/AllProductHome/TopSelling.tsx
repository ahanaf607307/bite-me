import { SmallProductCard } from "@/view/Shared/AllProductCard";
import f1 from "../../../../public/images/foodImage/f1.png";
import f2 from "../../../../public/images/foodImage/f2.png";
import f3 from "../../../../public/images/foodImage/f3.png";
import TitleShared from "@/view/Shared/TitleShared";
import { Separator } from "@/components/ui/separator";

const topSellingProducts = [
  {
    id: 1,
    image: f1,
    title: "Nestle Original Coffee-Mate Coffee Creamer",
    rating: 4.0,
    reviewCount: 120,
    currentPrice: 32.85,
    originalPrice: 35.8,
  },
  {
    id: 2,
    image: f2,
    title: "Nestle Original Coffee-Mate Coffee Creamer",
    rating: 4.0,
    reviewCount: 98,
    currentPrice: 32.85,
    originalPrice: 35.8,
  },
  {
    id: 3,
    image: f3,
    title: "Nestle Original Coffee-Mate Coffee Creamer",
    rating: 4.0,
    reviewCount: 156,
    currentPrice: 32.85,
    originalPrice: 35.8,
  },
];

export function TopSelling() {
  return (
    <div className="space-y-6">
      <TitleShared title="Trending Selling" className="text-start text-xl" />
      <Separator className="-mt-7" />
      <div className="space-y-4">
        {topSellingProducts.map((product) => (
          <SmallProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            rating={product.rating}
            reviewCount={product.reviewCount}
            currentPrice={product.currentPrice}
            originalPrice={product.originalPrice}
          />
        ))}
      </div>
    </div>
  );
}
