import HeroHome from "@/view/Home/HeroHome";
import PopularProductsHome from "@/view/Home/PopularProductsHome";
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
      </div>
    </div>
  );
}
