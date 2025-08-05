import AllProductsHom from "@/view/PublicComponents/Home/AllProductsHom";
import DailyBestSellHome from "@/view/PublicComponents/Home/DailyBestSellHome";
import HeroHome from "@/view/PublicComponents/Home/HeroHome";
import PopularProductsHome from "@/view/PublicComponents/Home/PopularProductsHome";

export default function Home() {
  return (
    <div>
      <section>
        <HeroHome />
      </section>
      <section className=" flex flex-col gap-y-6 md:gap-y-10 pt-6">
        <PopularProductsHome />
        <DailyBestSellHome />
        <AllProductsHom />
      </section>
    </div>
  );
}
