import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const newsItems = [
  {
    title: "Annual Sports Day 2024",
    date: "October 26, 2024",
    description: "Join us for our annual sports day filled with exciting competitions and team spirit!",
  },
  {
    title: "Parent-Teacher Meeting",
    date: "November 15, 2024",
    description: "A crucial meeting for parents to discuss student progress with teachers.",
  },
  {
    title: "School Reopening for New Session",
    date: "August 1, 2024",
    description: "Welcome back! The new academic session begins on August 1st.",
  },
  {
    title: "Science Fair Winners Announced",
    date: "September 20, 2024",
    description: "Congratulations to all participants and winners of this year's Science Fair!",
  },
];

const NewsAnnouncements = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">News & Announcements</h1>
      <p className="text-xl text-gray-600 text-center mb-10">
        Stay updated with the latest happenings and important information.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-2xl">{item.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{item.date}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Circulars & Exam Schedules</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          All official circulars and detailed exam schedules are available for download in the student portal. Please log in to access them.
        </p>
        {/* Placeholder for a button to student portal or downloads */}
        <div className="mt-6">
          <a href="#" className="text-blue-500 hover:text-blue-700 underline text-lg">
            Go to Student Portal / Downloads
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsAnnouncements;