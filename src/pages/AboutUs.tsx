import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6">
        <p>
          Welcome to our school! We are dedicated to providing a nurturing and stimulating environment where students can thrive academically, socially, and personally. Our rich history is built on a foundation of excellence and a commitment to fostering well-rounded individuals.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission & Vision</h2>
        <p>
          Our mission is to empower students with knowledge, skills, and values that will enable them to become responsible global citizens. We envision a future where our graduates are innovative thinkers, compassionate leaders, and lifelong learners.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Principal's Message</h2>
        <p>
          "It is with immense pleasure that I welcome you to our school's website. We believe in fostering a vibrant learning community where every child feels valued and inspired to reach their full potential. Our dedicated faculty and staff work tirelessly to create an environment that encourages curiosity, critical thinking, and creativity. We look forward to partnering with you in your child's educational journey."
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Achievements</h2>
        <p>
          Over the years, our students and faculty have achieved remarkable success in various fields, including academics, sports, arts, and community service. We are proud of their accomplishments and continue to strive for excellence in all endeavors.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;