import React from 'react';
import config from '../../config/index.js';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
        <p>© {new Date().getFullYear()} {config.app.name}. Built with industry gold-standard MERN architecture.</p>
        <p className="flex items-center space-x-2">
          <span>Environment: <strong className="text-gray-700">{config.env}</strong></span>
          <span>•</span>
          <span>API: <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700">{config.api.baseUrl}</code></span>
        </p>
      </div>
    </footer>
  );
};

