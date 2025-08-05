import food1 from "../../../../public/images/foodImage/burger.jpg";
import food2 from "../../../../public/images/foodImage/fishFry.jpg";
import food3 from "../../../../public/images/foodImage/plater.jpg";
import food4 from "../../../../public/images/foodImage/vagitableTrea.jpg";
import food5 from "../../../../public/images/foodImage/vagitableTrea2.jpg";
import ProductCard from "../../Shared/ProductCard";
import TitleShared from "../../Shared/TitleShared";
import { ProductCardType } from "../../TypeExport/ProductCardType";

const PopularProductsHome = () => {
  const productData: ProductCardType[] = [
    {
      id: 1,
      name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      description: "Instant Herbal Beverage with Dandelion",
      brand: "NestFood",
      rating: 4.0,
      price: 28.85,
      oldPrice: 32.8,
      image: food1,
      isHot: true,
    },
    {
      id: 2,
      name: "Nature's Path Organic Oats & Honey",
      description: "Crunchy granola snack for breakfast",
      brand: "GreenBites",
      rating: 4.5,
      price: 19.99,
      oldPrice: 22.49,
      image: food2,
      isHot: false,
    },
    {
      id: 3,
      name: "Organic Fruit & Nut Trail Mix",
      description: "A mix of dried fruits and roasted nuts",
      brand: "HealthyChoice",
      rating: 3.8,
      price: 14.99,
      oldPrice: 17.5,
      image: food3,
      isHot: true,
    },
    {
      id: 4,
      name: "Gluten-Free Coconut Cookies",
      description: "Light, crispy and sweet coconut cookies",
      brand: "CrispyCo",
      rating: 4.2,
      price: 9.99,
      oldPrice: 12.0,
      image: food4,
      isHot: false,
    },
    {
      id: 5,
      name: "Vegan Dark Chocolate Almond Bar",
      description: "Rich vegan chocolate with almond crunch",
      brand: "ChocoLuxe",
      rating: 4.9,
      price: 6.75,
      oldPrice: 8.25,
      image: food5,
      isHot: true,
    },
  ];
  return (
    <div className="container mx-auto p-6">
      {/* Title  */}
      <div>
        <TitleShared title="Popular Products" className="text-start" />
      </div>
      {/* map card data  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 pt-6 ">
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProductsHome;
