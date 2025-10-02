import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bus, Utensils, Dumbbell, BookOpen, FlaskConical } from "lucide-react";

const facilitiesList = [
  {
    name: "Transportation",
    // TODO: Update description with details about your school's transportation
    description: "Safe and reliable bus services covering various routes.",
    icon: <Bus className="h-8 w-8 text-primary" />,
  },
  {
    name: "Canteen",
    // TODO: Update description with details about your school's canteen/meals
    description: "Nutritious and healthy meals prepared daily by our catering team.",
    icon: <Utensils className="h-8 w-8 text-primary" />,
  },
  {
    name: "Sports",
    // TODO: Update description with details about your school's sports facilities
    description: "State-of-the-art indoor and outdoor sports facilities for various activities.",
    icon: <Dumbbell className="h-8 w-8 text-primary" />,
  },
  {
    name: "Library",
    // TODO: Update description with details about your school's library
    description: "A vast collection of books, journals, and digital resources for all ages.",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
  },
  {
    name: "Labs",
    // TODO: Update description with details about your school's labs
    description: "Well-equipped science and computer labs for practical learning.",
    icon: <FlaskConical className="h-8 w-8 text-primary" />,
  },
  // TODO: Add more facilities as needed
];

const Facilities = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Facilities</h1>
      <p className="text-xl text-gray-600 text-center mb-10">
        Providing a conducive environment for holistic development.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilitiesList.map((facility, index) => (
          <Card key={index} className="flex flex-col items-center text-center p-6">
            <div className="mb-4">{facility.icon}</div>
            <CardHeader className="p-0 mb-2">
              <CardTitle className="text-2xl">{facility.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-gray-700">{facility.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Facilities;