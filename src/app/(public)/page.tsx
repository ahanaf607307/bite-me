import AllProductsHom from "@/view/PublicComponents/Home/AllProductsHom";
import HeroHome from "@/view/PublicComponents/Home/HeroHome";
import PopularProductsHome from "@/view/PublicComponents/Home/PopularProductsHome";
import DailyBestSellHome from "@/view/Shared/DailyBestSellHome";

export default function Home() {
  return (
    <div>
      <section>
        <HeroHome />
      </section>
      <div className=" flex flex-col gap-y-6 md:gap-y-10 pt-6">
        <PopularProductsHome />
        <DailyBestSellHome />
        <AllProductsHom />
      </div>
    </div>
  );
}
