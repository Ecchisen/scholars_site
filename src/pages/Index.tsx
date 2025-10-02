import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Building2, Newspaper } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section / Banner */}
      <section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080/2196F3/FFFFFF?text=School+Banner')" }}>
        {/* TODO: Replace with your actual school banner image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center p-4">
          {/* TODO: Update with your school's welcome message */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">Welcome to Scholars' Home</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">Journey to Excellence</p>
          <Button asChild size="lg" className="animate-fade-in-up animation-delay-400">
            <Link to="/admissions">Admissions Open</Link>
          </Button>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 flex flex-col items-center">
            <CardHeader className="p-0 mb-4">
              <GraduationCap className="h-12 w-12 text-primary mb-2" />
              <CardTitle className="text-xl">Admissions</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-gray-700 mb-4">Learn about our admission process and apply online.</p>
              <Button asChild variant="link">
                <Link to="/admissions">Details</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center p-6 flex flex-col items-center">
            <CardHeader className="p-0 mb-4">
              <BookOpen className="h-12 w-12 text-primary mb-2" />
              <CardTitle className="text-xl">Academics</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-gray-700 mb-4">Explore our curriculum for all grade levels.</p>
              <Button asChild variant="link">
                <Link to="/academics/pg-grade2">View Programs</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center p-6 flex flex-col items-center">
            <CardHeader className="p-0 mb-4">
              <Building2 className="h-12 w-12 text-primary mb-2" />
              <CardTitle className="text-xl">Facilities</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-gray-700 mb-4">Discover our modern infrastructure and amenities.</p>
              <Button asChild variant="link">
                <Link to="/facilities">Explore</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center p-6 flex flex-col items-center">
            <CardHeader className="p-0 mb-4">
              <Newspaper className="h-12 w-12 text-primary mb-2" />
              <CardTitle className="text-xl">News & Events</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-gray-700 mb-4">Stay updated with the latest school news and events.</p>
              <Button asChild variant="link">
                <Link to="/news-announcements">Read More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* News and Announcements Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Latest News & Announcements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* TODO: Update with actual news items */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Annual Day Celebration</CardTitle>
                <p className="text-sm text-muted-foreground">October 20, 2024</p>
              </CardHeader>
              <CardContent>
                <p>Join us for our spectacular Annual Day featuring student performances and awards.</p>
                <Button asChild variant="link" className="pl-0">
                  <Link to="/news-announcements">Read More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Inter-School Debate Competition</CardTitle>
                <p className="text-sm text-muted-foreground">September 15, 2024</p>
              </CardHeader>
              <CardContent>
                <p>Our debate team secured first place in the regional competition!</p>
                <Button asChild variant="link" className="pl-0">
                  <Link to="/news-announcements">Read More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">New Library Books Arrived</CardTitle>
                <p className="text-sm text-muted-foreground">September 1, 2024</p>
              </CardHeader>
              <CardContent>
                <p>Exciting new collection of books now available in the school library.</p>
                <Button asChild variant="link" className="pl-0">
                  <Link to="/news-announcements">Read More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link to="/news-announcements">View All News</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;