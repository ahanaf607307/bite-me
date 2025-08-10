import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-white">
          We'd love to hear from you! Send us a message or find us at our
          location.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="Regarding a reservation"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                rows={5}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </CardContent>
        </Card>

        {/* Restaurant Information */}
        <div className="space-y-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Our Location</CardTitle>
              <CardDescription>Find us and our opening hours.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-gray-500 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-medium">Address</span>
                  <p className="text-gray-600">
                    123 Main Street, Anytown, USA 12345
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-gray-500 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-medium">Phone</span>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-gray-500 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-medium">Email</span>
                  <p className="text-gray-600">info@restaurant.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-gray-500 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-medium">Opening Hours</span>
                  <p className="text-gray-600">
                    Monday - Friday: 11:00 AM - 10:00 PM
                    <br />
                    Saturday - Sunday: 12:00 PM - 11:00 PM
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Placeholder for Map */}
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-lg font-medium">
            Map Placeholder
          </div>
        </div>
      </div>
    </div>
  );
}
