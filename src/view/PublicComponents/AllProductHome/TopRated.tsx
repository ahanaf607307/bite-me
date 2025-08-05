import { SmallProductCard } from "@/view/Shared/AllProductCard";
import TitleShared from "@/view/Shared/TitleShared";
import f3 from "../../../../public/images/foodImage/f10.png";
import f1 from "../../../../public/images/foodImage/f8.png";
import f2 from "../../../../public/images/foodImage/f9.png";
import { Separator } from "@/components/ui/separator";

const topRatedProducts = [
  {
    id: 1,
    image: f1,
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    rating: 4.0,
    reviewCount: 201,
    currentPrice: 32.85,
    originalPrice: 35.8,
  },
  {
    id: 2,
    image: f2,
    title: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
    rating: 4.0,
    reviewCount: 167,
    currentPrice: 32.85,
    originalPrice: 35.8,
  },
  {
    id: 3,
    image: f3,
    title: "All Natural Italian-Style Chicken Meatballs",
    rating: 4.0,
    reviewCount: 145,
    currentPrice: 32.85,
    originalPrice: 35.8,
  },
];

export function TopRated() {
  return (
    <div className="space-y-6">
      <TitleShared title="Top Rated" className="text-start text-xl" />
      <Separator className="-mt-2" />
      <div className="space-y-4">
        {topRatedProducts.map((product) => (
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
