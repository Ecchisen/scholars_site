import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6">
        <p>
          Welcome to our school! We are dedicated to providing a nurturing and stimulating environment where students can thrive academically, socially, and personally. Our rich history is built on a foundation of excellence and a commitment to fostering well-rounded individuals. {/* TODO: Update [Year of Establishment] with your school's founding year */}Established in [Year of Establishment], our school has grown from a small community initiative into a leading educational institution known for its innovative approach and strong academic results.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission & Vision</h2>
        <p>
          Our **Mission** is to empower students with knowledge, skills, and values that will enable them to become responsible global citizens. We strive to cultivate a passion for learning, critical thinking, and creativity in every child.
        </p>
        <p>
          Our **Vision** is to be a beacon of educational excellence, fostering a community of lifelong learners who are prepared to meet the challenges of a dynamic world and contribute positively to society. We envision a future where our graduates are innovative thinkers, compassionate leaders, and lifelong learners.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Principal's Message</h2>
        <p className="italic border-l-4 border-primary pl-4">
          "It is with immense pleasure that I welcome you to our school's website. We believe in fostering a vibrant learning community where every child feels valued and inspired to reach their full potential. Our dedicated faculty and staff work tirelessly to create an environment that encourages curiosity, critical thinking, and creativity. We are committed to providing an education that not only imparts knowledge but also builds character and resilience. We look forward to partnering with you in your child's educational journey."
          <br />
          {/* TODO: Update [Principal's Name] with your school's principal's name */}
          <span className="font-semibold not-italic block mt-2">- [Tilak Rai], Principal</span>
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Achievements</h2>
        <p>
          Over the years, our students and faculty have achieved remarkable success in various fields. Our academic programs consistently produce top performers in national examinations. In sports, our teams have won numerous championships at district and state levels. Our students also excel in arts and cultural events, showcasing their talents in music, drama, and visual arts. We are particularly proud of our community service initiatives, where students actively engage in making a positive impact on society. These accomplishments are a testament to the hard work and dedication of our entire school community.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;