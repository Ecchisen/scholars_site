import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, CalendarDays, Award, Globe } from "lucide-react";

const studentLifeActivities = [
  {
    name: "Clubs & Societies",
    // TODO: Update description with details about your school's clubs
    description: "A wide range of clubs including debate, science, art, and music.",
    icon: <Users className="h-8 w-8 text-primary" />,
  },
  {
    name: "Events & Festivals",
    // TODO: Update description with details about your school's events
    description: "Annual events, cultural festivals, and celebrations throughout the year.",
    icon: <CalendarDays className="h-8 w-8 text-primary" />,
  },
  {
    name: "Extracurricular Activities",
    // TODO: Update description with details about your school's extracurriculars
    description: "Sports, drama, dance, and various other activities to foster talents.",
    icon: <Award className="h-8 w-8 text-primary" />,
  },
  {
    name: "Educational Trips",
    // TODO: Update description with details about your school's trips
    description: "Excursions and field trips to enhance learning beyond the classroom.",
    icon: <Globe className="h-8 w-8 text-primary" />,
  },
  // TODO: Add more student life activities as needed
];

const StudentLife = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Student Life</h1>
      <p className="text-xl text-gray-600 text-center mb-10">
        Beyond academics: fostering growth, creativity, and community.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {studentLifeActivities.map((activity, index) => (
          <Card key={index} className="flex flex-col items-center text-center p-6">
            <div className="mb-4">{activity.icon}</div>
            <CardHeader className="p-0 mb-2">
              <CardTitle className="text-2xl">{activity.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-gray-700">{activity.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StudentLife;