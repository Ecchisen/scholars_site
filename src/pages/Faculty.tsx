import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const facultyMembers = [
  {
    name: "Dr. Anya Sharma",
    title: "Head of Science Department",
    expertise: "Physics, Astrophysics",
    // TODO: Replace with actual faculty member image URL
    image: "https://via.placeholder.com/150/0000FF/FFFFFF?text=AS",
  },
  {
    name: "Mr. David Lee",
    title: "Senior English Teacher",
    expertise: "Literature, Creative Writing",
    // TODO: Replace with actual faculty member image URL
    image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=DL",
  },
  {
    name: "Ms. Sarah Chen",
    title: "Mathematics Coordinator",
    expertise: "Calculus, Algebra",
    // TODO: Replace with actual faculty member image URL
    image: "https://via.placeholder.com/150/00FF00/FFFFFF?text=SC",
  },
  {
    name: "Mrs. Emily White",
    title: "Primary School Lead",
    expertise: "Early Childhood Education",
    // TODO: Replace with actual faculty member image URL
    image: "https://via.placeholder.com/150/FFFF00/000000?text=EW",
  },
  // TODO: Add more faculty members as needed
];

const Faculty = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Outstanding Faculty</h1>
      <p className="text-xl text-gray-600 text-center mb-10">
        Meet the dedicated educators who inspire and guide our students.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyMembers.map((member, index) => (
          <Card key={index} className="flex flex-col items-center text-center p-6">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src={member.image} alt={member.name} />
              <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <CardHeader className="p-0 mb-2">
              <CardTitle className="text-2xl">{member.name}</CardTitle>
              <p className="text-md text-muted-foreground">{member.title}</p>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-gray-700">Expertise: {member.expertise}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Faculty;