import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  { src: "https://via.placeholder.com/400x300/A0C4FF/FFFFFF?text=Classroom+1", alt: "Classroom 1" },
  { src: "https://via.placeholder.com/400x300/BDB2FF/FFFFFF?text=Event+Day", alt: "Event Day" },
  { src: "https://via.placeholder.com/400x300/FFC6FF/FFFFFF?text=Sports+Activity", alt: "Sports Activity" },
  { src: "https://via.placeholder.com/400x300/FFADAD/FFFFFF?text=Library", alt: "Library" },
  { src: "https://via.placeholder.com/400x300/FFD6A5/FFFFFF?text=Science+Lab", alt: "Science Lab" },
  { src: "https://via.placeholder.com/400x300/FDFFB6/000000?text=Art+Class", alt: "Art Class" },
];

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Gallery</h1>
      <p className="text-xl text-gray-600 text-center mb-10">
        A glimpse into our vibrant school life.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4 text-center text-lg font-medium">
                {image.alt}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Videos</h2>
        <p className="text-lg text-gray-700">
          Check out our school videos on our official YouTube channel!
        </p>
        {/* Placeholder for embedded video or link */}
        <div className="mt-6 w-full max-w-2xl mx-auto aspect-video bg-gray-200 flex items-center justify-center rounded-lg">
          <span className="text-gray-500">Video Placeholder</span>
        </div>
      </div>
    </div>
  );
};

export default Gallery;