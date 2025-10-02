import React from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-background py-6 text-center text-sm text-muted-foreground">
      <div className="container">
        {/* TODO: Update 'School Name' with your actual school name */}
        &copy; {new Date().getFullYear()} Scholar's Home. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;