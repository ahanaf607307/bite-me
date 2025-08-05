import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const AdBanner = () => {
  return (
    <div>
      {/* Promotional Banner */}
      <section className="py-12 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-3xl font-bold text-white mb-2">
                Free Delivery on Orders Over $30
              </h3>
              <p className="text-white/90 text-lg">
                Order now and get your favorite dishes delivered to your
                doorstep
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-orange-600 hover:bg-gray-100"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white"
              >
                Order Online
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdBanner;
