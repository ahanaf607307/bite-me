"use client";

import { Search } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import ProductCard from "@/view/Shared/ProductCard";
import item1 from "../../../../public/images/allItem/bbq-bacon-burger.png";
import item2 from "../../../../public/images/allItem/buffalo-chicken-wings.png";
import item3 from "../../../../public/images/allItem/chocolate-milkshake.png";
import item4 from "../../../../public/images/allItem/classic-beef-burger.png";
import item5 from "../../../../public/images/allItem/crispy-fried-chicken.png";
import {
  default as item6,
  default as item7,
} from "../../../../public/images/allItem/grilled-chicken-sandwich.png";
import item8 from "../../../../public/images/allItem/margherita-pizza.png";
import item9 from "../../../../public/images/allItem/mint-chocolate-chip-ice-cream.png";
import item12 from "../../../../public/images/allItem/oreo-milkshake.png";
import item10 from "../../../../public/images/allItem/strawberry-cheesecake.png";
import item11 from "../../../../public/images/allItem/vanilla-ice-cream.png";
import SidebarFilter from "@/view/PublicComponents/AllItemComponents/SidebarFilter";
import { useAppSelector } from "@/redux/hooks";
import { selectFilteredItems } from "@/redux/Features/foodFilter/selectors";

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 50]);

  const foodItems = [
    {
      id: 1,
      name: "Classic Beef Burger",
      description:
        "Juicy beef patty with lettuce, tomato, onion, and special sauce",
      price: 12.99,
      category: "Burgers",
      image: item1,
      brand: "NestFood",
      rating: 4.5,
      oldPrice: 25.99,
      isHot: true,
    },
    {
      id: 2,
      name: "Vanilla Ice Cream",
      description: "Creamy vanilla ice cream with chocolate chips",
      price: 6.99,
      category: "Ice Cream",
      image: item2,
      brand: "NestFood",
      rating: 4.8,
      oldPrice: 12.99,
      isHot: false,
    },
    {
      id: 3,
      name: "Crispy Chicken Fry",
      description: "Golden fried chicken pieces with herbs and spices",
      price: 15.99,
      category: "Chicken",
      image: item3,
      brand: "NestFood",
      rating: 4.6,
      oldPrice: 22.99,
      isHot: true,
    },
    {
      id: 4,
      name: "Chocolate Milkshake",
      description: "Rich chocolate milkshake topped with whipped cream",
      price: 8.99,
      category: "Beverages",
      image: item4,
      brand: "NestFood",
      rating: 4.7,
      oldPrice: 13.99,
      isHot: false,
    },
    {
      id: 5,
      name: "Margherita Pizza",
      description: "Fresh mozzarella, tomato sauce, and basil on thin crust",
      price: 18.99,
      category: "Pizza",
      image: item5,
      brand: "NestFood",
      rating: 4.4,
      oldPrice: 27.99,
      isHot: true,
    },
    {
      id: 6,
      name: "Grilled Chicken Sandwich",
      description: "Grilled chicken breast with avocado and chipotle mayo",
      price: 13.99,
      category: "Sandwiches",
      image: item6,
      brand: "NestFood",
      rating: 4.3,
      oldPrice: 20.99,
      isHot: false,
    },
    {
      id: 7,
      name: "Strawberry Cheesecake",
      description: "Creamy cheesecake with fresh strawberry topping",
      price: 9.99,
      category: "Desserts",
      image: item7,
      brand: "NestFood",
      rating: 4.9,
      oldPrice: 15.99,
      isHot: true,
    },
    {
      id: 8,
      name: "Mango Smoothie",
      description: "Fresh mango smoothie with yogurt and honey",
      price: 7.99,
      category: "Beverages",
      image: item8,
      brand: "NestFood",
      rating: 4.5,
      oldPrice: 11.99,
      isHot: false,
    },
    {
      id: 9,
      name: "BBQ Bacon Burger",
      description: "Beef patty with BBQ sauce, bacon, and onion rings",
      price: 16.99,
      category: "Burgers",
      image: item9,
      brand: "NestFood",
      rating: 4.7,
      oldPrice: 26.99,
      isHot: true,
    },
    {
      id: 10,
      name: "Mint Chocolate Chip",
      description: "Refreshing mint ice cream with chocolate chips",
      price: 7.99,
      category: "Ice Cream",
      image: item10,
      brand: "NestFood",
      rating: 4.0,
      oldPrice: 32.8,
      isHot: true,
    },
    {
      id: 11,
      name: "Buffalo Wings",
      description: "Spicy buffalo chicken wings with blue cheese dip",
      price: 14.99,
      category: "Chicken",
      image: item11,
      brand: "NestFood",
      rating: 4.4,
      oldPrice: 21.99,
      isHot: true,
    },
    {
      id: 12,
      name: "Oreo Milkshake",
      description: "Cookies and cream milkshake with Oreo pieces",
      price: 9.99,
      category: "Beverages",
      image: item12,
      brand: "NestFood",
      rating: 4.8,
      oldPrice: 14.99,
      isHot: false,
    },
  ];

  const filteredItems = useAppSelector(selectFilteredItems(foodItems));

  return (
    <div className="min-h-screen bg-background ">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sticky Sidebar wrapper */}
          <div className="sticky top-20 self-start">
            <SidebarFilter />
          </div>

          {/* Right side - Food Items */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">
                {filteredItems.length} items found
              </h3>
              <div className="text-sm text-muted-foreground">
                Showing results for your selection
              </div>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <ProductCard key={item?.id} product={item} />
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <div className="text-muted-foreground mb-4">
                  <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-semibold mb-2">No items found</h3>
                  <p>Try adjusting your search or filter criteria</p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategories([]);
                    setPriceRange([0, 50]);
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
