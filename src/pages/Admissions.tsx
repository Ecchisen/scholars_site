import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Admissions = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Admissions</h1>
      <p className="text-xl text-gray-600 text-center mb-10">
        Join our vibrant learning community!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="p-6 text-center">
          <CardHeader>
            <CardTitle className="text-2xl mb-4">Online Admission Form</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-gray-700">
              Ready to apply? Fill out our online admission form to get started.
            </p>
            <Button asChild size="lg">
              {/* TODO: Update this link to your actual online admission form */}
              <Link to="/admissions/apply">Apply Now</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="p-6 text-center">
          <CardHeader>
            <CardTitle className="text-2xl mb-4">Guidelines & Fee Details</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-gray-700">
              Find detailed information about our admission process, eligibility criteria, and fee structure.
            </p>
            <Button asChild variant="outline" size="lg">
              {/* TODO: Update this link to your actual admission guidelines and fee details page/document */}
              <Link to="/admissions/details">View Details</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Admission Process</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {/* TODO: Customize the admission process description */}
          Our admission process is designed to be straightforward and transparent. It typically involves submitting an application, an entrance assessment (for certain grades), and an interview. We encourage prospective parents to schedule a school tour.
        </p>
      </div>
    </div>
  );
};

export default Admissions;