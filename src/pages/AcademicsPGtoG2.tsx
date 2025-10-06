import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  { src: "https://via.placeholder.com/800x400/FFD1DC/000000?text=Playgroup+Fun", alt: "Playgroup Fun" },
  { src: "https://via.placeholder.com/800x400/B2EBF2/000000?text=Grade+1+Class", alt: "Grade 1 Class" },
  { src: "https://via.placeholder.com/800x400/C8E6C9/000000?text=Art+Activity", alt: "Art Activity" },
  { src: "https://via.placeholder.com/800x400/FFF9C4/000000?text=Outdoor+Play", alt: "Outdoor Play" },
  { src: "https://via.placeholder.com/800x400/FFCCBC/000000?text=Story+Time", alt: "Story Time" },
  { src: "https://via.placeholder.com/800x400/D1C4E9/000000?text=Learning+Games", alt: "Learning Games" },
  { src: "https://via.placeholder.com/800x400/A7FFEB/000000?text=Science+Exploration", alt: "Science Exploration" },
  { src: "https://via.placeholder.com/800x400/FFE0B2/000000?text=Group+Work", alt: "Group Work" },
  { src: "https://via.placeholder.com/800x400/CFD8DC/000000?text=Music+Class", alt: "Music Class" },
  { src: "https://via.placeholder.com/800x400/F8BBD0/000000?text=Reading+Corner", alt: "Reading Corner" },
];

const AcademicsPGtoG2 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Academics: PG to Grade 2</h1>
      <p className="text-xl text-gray-600 text-center mb-10">
        Our early years program focuses on creating a joyful and engaging learning experience.
      </p>

      <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
        {/* Carousel Section */}
        <div className="lg:w-1/2">
          <Carousel className="w-full max-w-md mx-auto"> {/* Reduced max-w-xl to max-w-md */}
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-0">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 text-lg text-gray-700 space-y-6">
          <p>
            Our early years program for PG (Playgroup) to Grade 2 provides a joyful and engaging learning experience in a dedicated, child-friendly block. This safe, stimulating environment features vibrant classrooms, age-appropriate materials, and indoor/outdoor play areas, fostering exploration, creativity, and social interaction.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Curriculum Highlights</h2>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>**Play-based Learning:** Fostering curiosity and problem-solving through engaging activities.</li>
            <li>**Foundational Skills:** Strong emphasis on early literacy, numeracy, and basic science concepts.</li>
            <li>**Holistic Development:** Encouraging creative arts, sensory exploration, and social-emotional growth.</li>
            <li>**Physical Activity:** Promoting healthy lifestyles through regular physical education.</li>
          </ul>
          <p>
            Our experienced educators provide personalized attention in a low student-to-teacher ratio, supporting each child's unique learning journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademicsPGtoG2;