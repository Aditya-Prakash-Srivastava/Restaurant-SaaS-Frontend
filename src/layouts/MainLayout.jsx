import React from 'react';
import { Navbar } from '../components/layout/Navbar.jsx';
import { Footer } from '../components/layout/Footer.jsx';

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50/60 text-gray-900">
      <Navbar />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

