import { SmallProductCard } from "@/view/Shared/AllProductCard";
import f1 from "../../../../public/images/foodImage/f4.png";
import f2 from "../../../../public/images/foodImage/f5.png";
import f3 from "../../../../public/images/foodImage/f6.png";
import TitleShared from "@/view/Shared/TitleShared";
import { Separator } from "@/components/ui/separator";

const trendingProducts = [
  {
    id: 1,
    image: f1,
    title: "Organic Cage-Free Grade A Large Brown Eggs",
    rating: 4.0,
    reviewCount: 87,
    currentPrice: 32.85,
    originalPrice: 35.8,
  },
  {
    id: 2,
    image: f2,
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: 4.0,
    reviewCount: 143,
    currentPrice: 32.85,
    originalPrice: 35.8,
  },
  {
    id: 3,
    image: f3,
    title: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
    rating: 4.0,
    reviewCount: 92,
    currentPrice: 32.85,
    originalPrice: 35.8,
  },
];

export function TrendingProducts() {
  return (
    <div className="space-y-6">
      <TitleShared title="Trending Products" className="text-start text-xl" />
      <Separator className="-mt-2 " />
      <div className="space-y-4">
        {trendingProducts.map((product) => (
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
