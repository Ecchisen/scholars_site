import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ContactUs = () => {
  // TODO: Implement form submission logic here (e.g., using a state management library or a simple onSubmit handler)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!");
    // Add your form submission logic here, e.g., sending data to an API
    // You might want to use a library like react-hook-form for more complex forms
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-xl text-gray-600 text-center mb-10">
        We'd love to hear from you!
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="text-2xl mb-4">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                {/* TODO: Update with your school's actual address */}
                <p className="text-gray-700">
                  Sundarharaincha - 9, Morang, PLO Road
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                {/* TODO: Update with your school's actual phone number */}
                <p className="text-gray-700">021-545255</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                {/* TODO: Update with your school's actual email address */}
                <p className="text-gray-700">scholarshome810@gmail.com</p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-2">Location Map</h3>
              {/* TODO: Replace with an embedded map (e.g., Google Maps iframe) */}
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
                <span className="text-gray-500">Map Placeholder</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader>
            <CardTitle className="text-2xl mb-4">Inquiry Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your Email" />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Subject of your inquiry" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your Message" rows={5} />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactUs;