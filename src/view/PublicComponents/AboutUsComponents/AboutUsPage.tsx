import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import Chef from "./Chef";
import image1 from "../../../../public/images/foodImage/fishFry.jpg";
import image2 from "../../../../public/images/foodImage/plater.jpg";
import image3 from "../../../../public/images/foodImage/plater.jpg";

export default function AboutUsPage() {
  const chefData = [
    {
      name: "Chef John Doe",
      position: "Head Chef & Founder",
      image: image2,
      chefExperience: "4years",
      description: [
        "Chef John Doe, with over 20 years of culinary experience, is the heart and soul of Bite Me. Where he learned the art of traditional cooking. ",
        "John's dedication to fresh, seasonal ingredients and his creative flair are evident in every dish he crafts. He believes that food is an expression of love and culture.",
      ],
    },
    {
      name: "Sous Chef Emily Carter",
      position: "Sous Chef",
      image: image3,
      chefExperience: "4years",
      description: [
        "Emily Carter is the creative force behind many of our signature dishes. Trained at a top culinary school, she brings a refined technique and a deep understanding of flavor to every plate.",
        "Her commitment to excellence and her attention to detail help ensure that each guest enjoys a consistent and delightful dining experience.",
      ],
    },
    {
      name: "Pastry Chef Miguel Alvarez",
      position: "Pastry Chef",
      image: image3,
      chefExperience: " 4years",
      description: [
        "Miguel Alvarez specializes in crafting beautiful and decadent desserts that are the perfect end to any meal. From delicate pastries to rich chocolate creations, his work is a blend of art and science.",
        "Inspired by his travels and cultural heritage, Miguel brings unique flavor combinations and stunning presentation to our dessert menu.",
      ],
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12 md:px-6 lg:py-20">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          About Our Culinary Journey
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
          Discover the passion, history, and philosophy that make our restaurant
          a unique dining experience.
        </p>
      </section>

      <section className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Story
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Established in 2005, [Restaurant Name] began as a humble dream to
            bring authentic, home-cooked flavors to the heart of the city. What
            started as a small family-run eatery has blossomed into a beloved
            culinary destination, renowned for its warm ambiance and exquisite
            dishes. Our journey has been one of dedication, passion, and a
            relentless pursuit of culinary excellence.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Over the years, we've stayed true to our roots, honoring traditional
            recipes while embracing innovative techniques. Every dish tells a
            story, a testament to the rich heritage and vibrant flavors that
            inspire us daily. We believe in creating not just meals, but
            memorable experiences that bring people together.
          </p>
        </div>
        <div className="relative h-64 w-full md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={image1}
            alt="Cozy restaurant interior"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <Separator className="my-16" />

      <section className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-16">
        <div className="relative h-64 w-full md:h-96 rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
          <Image
            src={image2}
            alt="Fresh ingredients"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="space-y-6 order-1 lg:order-2">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Philosophy & Ingredients
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At [Restaurant Name], our philosophy is simple: use the freshest,
            highest-quality ingredients to create dishes that delight the
            senses. We meticulously source our produce from local farms,
            ensuring every vegetable, herb, and fruit is at its peak flavor. Our
            meats and seafood are sustainably sourced, reflecting our commitment
            to both taste and ethical practices.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe that great food starts with great ingredients. Our chefs
            transform these raw elements into culinary masterpieces, blending
            traditional techniques with modern flair. Every plate is crafted
            with care, passion, and a deep respect for the natural flavors of
            the ingredients.
          </p>
        </div>
      </section>

      <Separator className="my-16" />
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
        Meet Our Chef
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
        {chefData.map((chef, index) => (
          <Chef key={index} chef={chef} />
        ))}
      </div>

      <section className="text-center py-12 rounded-lg bg bg-gradient-to-r from-yellow-400 to-orange-500">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Ready to Experience Our Flavors?
        </h2>
        <p className="text-lg  mb-8 text-white">
          Explore our diverse menu or make a reservation to dine with us.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/menu">View Our Menu</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/reservations">Make a Reservation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
