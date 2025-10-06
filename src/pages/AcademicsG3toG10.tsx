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
  { src: "https://via.placeholder.com/800x400/A0C4FF/FFFFFF?text=Math+Class", alt: "Math Class" },
  { src: "https://via.placeholder.com/800x400/BDB2FF/FFFFFF?text=Science+Lab", alt: "Science Lab" },
  { src: "https://via.placeholder.com/800x400/FFC6FF/FFFFFF?text=English+Literature", alt: "English Literature" },
  { src: "https://via.placeholder.com/800x400/FFADAD/FFFFFF?text=Computer+Lab", alt: "Computer Lab" },
  { src: "https://via.placeholder.com/800x400/FFD6A5/FFFFFF?text=History+Lesson", alt: "History Lesson" },
  { src: "https://via.placeholder.com/800x400/FDFFB6/000000?text=Group+Project", alt: "Group Project" },
  { src: "https://via.placeholder.com/800x400/C8E6C9/000000?text=Art+Studio", alt: "Art Studio" },
  { src: "https://via.placeholder.com/800x400/B2EBF2/000000?text=Sports+Training", alt: "Sports Training" },
  { src: "https://via.placeholder.com/800x400/D1C4E9/000000?text=Library+Research", alt: "Library Research" },
  { src: "https://via.placeholder.com/800x400/F8BBD0/000000?text=Debate+Club", alt: "Debate Club" },
];

const AcademicsG3toG10 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Academics: Grade 3 to 10</h1>
      <p className="text-xl text-gray-600 text-center mb-10">
        A comprehensive and challenging curriculum for holistic development.
      </p>

      <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
        {/* Carousel Section */}
        <div className="lg:w-1/2">
          <Carousel className="w-full max-w-md mx-auto">
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
            Our program for Grade 3 to 10 offers a comprehensive curriculum designed to prepare students for higher education and future success. We focus on developing critical thinking, problem-solving skills, and a deep understanding of core subjects, while fostering creativity and independent learning.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Curriculum Highlights</h2>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>**Core Subjects:** In-depth studies in Mathematics, Science (Physics, Chemistry, Biology), English Language & Literature, and Social Studies (History, Geography, Civics, Economics).</li>
            <li>**Technology & Languages:** Computer Science (programming, digital literacy) and options for a Second Language (e.g., Hindi, French, Spanish).</li>
            <li>**Electives:** Diverse options like Art, Music, Drama, and Physical Education to nurture varied interests.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Teaching & Evaluation</h2>
          <p>
            We employ a student-centered approach with innovative methodologies, integrating technology and real-world examples. Our evaluation system is continuous, assessing academic performance and holistic development through formative and summative assessments, projects, and regular feedback.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademicsG3toG10;