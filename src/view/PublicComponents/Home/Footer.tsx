import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  ChefHat,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="dark:bg-slate-900 dark:text-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-orange-600" />
              <h3 className="text-2xl font-bold text-orange-600">biteMe</h3>
            </div>
            <p className="text-gray-800 dark:text-slate-300 text-sm leading-relaxed">
              Experience authentic Italian cuisine in the heart of the city.
              Fresh ingredients, traditional recipes, and warm hospitality await
              you.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-800 dark:text-slate-300 bg-gray-200 dark:bg-gray-800 hover:text-orange-500"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-800 dark:text-slate-300 bg-gray-200 dark:bg-gray-800 hover:text-orange-500"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-800 dark:text-slate-300 bg-gray-200 dark:bg-gray-800 hover:text-orange-500"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="#menu"
                className="text-gray-800 dark:text-slate-300 hover:text-orange-500 transition-colors text-sm"
              >
                Our Menu
              </a>
              <a
                href="#reservations"
                className="text-gray-800 dark:text-slate-300 hover:text-orange-500 transition-colors text-sm"
              >
                Reservations
              </a>
              <a
                href="#about"
                className="text-gray-800 dark:text-slate-300 hover:text-orange-500 transition-colors text-sm"
              >
                About Us
              </a>
              <a
                href="#events"
                className="text-gray-800 dark:text-slate-300 hover:text-orange-500 transition-colors text-sm"
              >
                Private Events
              </a>
              <a
                href="#catering"
                className="text-gray-800 dark:text-slate-300 hover:text-orange-500 transition-colors text-sm"
              >
                Catering
              </a>
              <a
                href="#contact"
                className="text-gray-800 dark:text-slate-300 hover:text-orange-500 transition-colors text-sm"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-800 dark:text-slate-300">
                  <p>123 Culinary Street</p>
                  <p>Downtown District</p>
                  <p>Lalmonirhat, Rangpur, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-gray-800 dark:text-slate-300 hover:text-orange-500 transition-colors"
                >
                  +880 16000000000
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a
                  href="mailto:info@bellavista.com"
                  className="text-sm text-gray-800 dark:text-slate-300 hover:text-orange-500 transition-colors"
                >
                  info@biteme.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours & Newsletter */}
          <div className="space-y-6">
            {/* Opening Hours */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold dark:text-white text-gray-800 flex items-center">
                <Clock className="h-5 w-5 text-orange-500 mr-2" />
                Opening Hours
              </h4>
              <div className="space-y-2 text-sm text-gray-800 dark:text-slate-300">
                <div className="flex justify-between">
                  <span>Mon - Thu:</span>
                  <span>5:00 PM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Fri - Sat:</span>
                  <span>5:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>4:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white ">
                Newsletter
              </h4>
              <p className="text-sm text-gray-800 dark:text-slate-300">
                Subscribe for special offers and updates
              </p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/80 dark:bg-white border-slate-700 text-slate-100 placeholder:text-gray-800 dark:text-slate-400 focus:border-orange-500"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-800  dark:text-slate-400">
            © 2024 Bite Me. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a
              href="#privacy"
              className="text-gray-800  dark:text-slate-400 hover:text-orange-500 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-gray-800 dark:text-slate-400 hover:text-orange-500 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#accessibility"
              className="text-gray-800 dark:text-slate-400 hover:text-orange-500 transition-colors"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
