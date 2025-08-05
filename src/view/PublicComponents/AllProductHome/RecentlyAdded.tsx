import { SmallProductCard } from "@/view/Shared/AllProductCard";
import f1 from "../../../../public/images/foodImage/f5.png";
import f2 from "../../../../public/images/foodImage/f6.png";
import f3 from "../../../../public/images/foodImage/f7.png";
import TitleShared from "@/view/Shared/TitleShared";
import { Separator } from "@/components/ui/separator";

const recentlyAddedProducts = [
  {
    id: 1,
    image: f1,
    title: "Pepperidge Farm Farmhouse Hearty White Bread",
    rating: 4.0,
    reviewCount: 76,
    currentPrice: 32.85,
    originalPrice: 35.8,
  },
  {
    id: 2,
    image: f2,
    title: "Organic Frozen Triple Berry Blend",
    rating: 4.0,
    reviewCount: 134,
    currentPrice: 32.85,
    originalPrice: 35.8,
  },
  {
    id: 3,
    image: f3,
    title: "Oroweat Country Buttermilk Bread",
    rating: 4.0,
    reviewCount: 89,
    currentPrice: 32.85,
    originalPrice: 35.8,
  },
];

export function RecentlyAdded() {
  return (
    <div className="space-y-6">
      <TitleShared
        title="Recently added"
        className="text-start text-sm md:text-md"
      />
      <Separator className="-mt-7" />
      <div className="space-y-4">
        {recentlyAddedProducts.map((product) => (
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
