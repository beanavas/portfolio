import React from 'react';

const Footer = () => {
  return (
    <footer className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#FFC1CB] text-white py-6">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    <div className="mb-4 md:mb-0">
      <h2 className="text-4xl font-semibold">Get in Touch</h2>
      <p>Email: <a href="mailto:your.email@example.com" >beanavasaguilera@gmail.com</a></p>

    </div>
    <div className="text-sm text-white">
      &copy; {new Date().getFullYear()} Beatriz Navas. All rights reserved.
    </div>
  </div>
</footer>
  );
};

export default Footer;
