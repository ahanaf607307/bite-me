import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

interface ChefType {
  image: StaticImageData;
  name: string;
  position: string;
  chefExperience: string;
  description: string[];
}

interface IChef {
  chef: ChefType;
}

const Chef = ({ chef }: IChef) => {
  return (
    <div>
      <section className="mb-16 text-center">
        <div className="flex justify-center">
          <Card className="w-full max-w-md">
            <CardHeader className="flex flex-col items-center text-center">
              <Image
                src={chef.image}
                alt="profile"
                className="h-24 w-24 rounded-full"
              />
              <CardTitle className="text-2xl">{chef.name}</CardTitle>
              <CardDescription className="text-md">
                {chef.position}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground leading-relaxed">
              <p>{chef.chefExperience}</p>
              {chef.description.map((para, index) => (
                <p key={index} className="mt-4">
                  {para}
                </p>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Chef;
