"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MobileNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeSheet = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>
            <Link to="/" className="flex items-center space-x-2" onClick={closeSheet}>
              <span className="font-bold text-lg">Scholars' Home</span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 py-6">
          <Link to="/" className="text-lg font-medium hover:text-primary" onClick={closeSheet}>
            Home
          </Link>
          <Link to="/about-us" className="text-lg font-medium hover:text-primary" onClick={closeSheet}>
            About Us
          </Link>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="academics">
              <AccordionTrigger className="text-lg font-medium hover:text-primary py-0">
                Academics
              </AccordionTrigger>
              <AccordionContent className="pl-4 pt-2 pb-0">
                <div className="flex flex-col gap-2">
                  <Link to="/academics/pg-grade2" className="text-base text-muted-foreground hover:text-primary" onClick={closeSheet}>
                    PG to Grade 2
                  </Link>
                  <Link to="/academics/grade3-grade10" className="text-base text-muted-foreground hover:text-primary" onClick={closeSheet}>
                    Grade 3 to 10
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* Removed Faculty Link */}
          {/*
          <Link to="/faculty" className="text-lg font-medium hover:text-primary" onClick={closeSheet}>
            Faculty
          </Link>
          */}
          <Link to="/facilities" className="text-lg font-medium hover:text-primary" onClick={closeSheet}>
            Facilities
          </Link>
          <Link to="/student-life" className="text-lg font-medium hover:text-primary" onClick={closeSheet}>
            Student Life
          </Link>
          <Link to="/admissions" className="text-lg font-medium hover:text-primary" onClick={closeSheet}>
            Inquiry
          </Link>
          <Link to="/gallery" className="text-lg font-medium hover:text-primary" onClick={closeSheet}>
            Gallery
          </Link>
          <Link to="/news-announcements" className="text-lg font-medium hover:text-primary" onClick={closeSheet}>
            News & Announcements
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;