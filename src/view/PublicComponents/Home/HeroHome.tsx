"use client";

import { Button } from "@/components/ui/button";
import { ChefHat, Clock, MoveLeft, MoveRight, Star } from "lucide-react";
import Image from "next/image";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import h1 from "../../../../public/images/heroImage/b4.jpg";
import h2 from "../../../../public/images/heroImage/b5.jpg";
import h3 from "../../../../public/images/heroImage/b8.jpg";
import h4 from "../../../../public/images/heroImage/b6.jpg";
import h5 from "../../../../public/images/heroImage/b3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const heroSlides = [
  {
    id: 1,
    image: h1,
    title: "Savor the Perfect",
    subtitle: "Grilled Experience",
    description:
      "Indulge in our signature grilled steaks, perfectly seasoned and cooked to perfection with fresh seasonal vegetables.",
    badge: "Chef's Special",
  },
  {
    id: 2,
    image: h2,
    title: "Authentic Italian",
    subtitle: "Pasta Perfection",
    description:
      "Experience the taste of Italy with our handmade pasta, crafted daily with the finest ingredients and traditional recipes.",
    badge: "Handmade Daily",
  },
  {
    id: 3,
    image: h3,
    title: "Ocean's Finest",
    subtitle: "Seafood Selection",
    description:
      "Dive into our fresh seafood selection, sourced daily from local fishermen and prepared by our expert chefs.",
    badge: "Fresh Daily",
  },
  {
    id: 4,
    image: h4,
    title: "Ocean's Finest",
    subtitle: "Seafood Selection",
    description:
      "Dive into our fresh seafood selection, sourced daily from local fishermen and prepared by our expert chefs.",
    badge: "Fresh Daily",
  },
  {
    id: 5,
    image: h5,
    title: "Ocean's Finest",
    subtitle: "Seafood Selection",
    description:
      "Dive into our fresh seafood selection, sourced daily from local fishermen and prepared by our expert chefs.",
    badge: "Fresh Daily",
  },
];

export default function HeroHome() {
  return (
    <section className="relative h-[calc(100vh-120px)] w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute inset-0">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={`${slide.title} ${slide.subtitle}`}
                fill
                className="object-cover"
                priority={slide.id === 1}
              />
            </div>

            <div className="relative z-20 flex h-full items-center">
              <div className="container mx-auto px-4 ">
                <div className="max-w-3xl space-y-6 text-white">
                  <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/90 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                    <ChefHat className="h-4 w-4" />
                    {slide.badge}
                  </div>

                  <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                      {slide.title}
                      <br />
                      <span className="text-orange-400">{slide.subtitle}</span>
                    </h1>

                    <p className="max-w-2xl text-lg text-gray-200 md:text-xl">
                      {slide.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
                    >
                      View Menu
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
                    >
                      Book a Table
                    </Button>
                  </div>

                  <div className="flex items-center gap-6 pt-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-orange-400" />
                      <span className="text-sm">Open until 11 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-orange-400 fill-current" />
                      <span className="text-sm">4.8/5 Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <Button
        size="lg"
        className="swiper-button-prev-custom absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30 md:left-8 cursor-pointer"
      >
        <MoveLeft />
      </Button>

      <Button
        size="lg"
        className="swiper-button-next-custom absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20  text-white backdrop-blur-sm transition-all hover:bg-white/30 md:right-8 cursor-pointer"
      >
        <MoveRight />
      </Button>

      <style jsx global>{`
        .swiper-pagination-bullet-active-custom {
          background-color: rgb(249 115 22) !important;
        }
      `}</style>
    </section>
  );
}
