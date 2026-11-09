import React from 'react';
import { Link } from 'react-router-dom';
import { Layers } from 'lucide-react';
import config from '../../config/index.js';
import { APP_ROUTES } from '../../constants/routes.js';

export const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            to={APP_ROUTES.HOME}
            className="flex items-center space-x-3 text-gray-900 font-bold text-lg hover:opacity-90 transition-opacity"
          >
            <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center text-white shadow-sm">
              <Layers className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="leading-tight">{config.app.name}</span>
              <span className="text-[10px] text-gray-400 font-medium tracking-wide uppercase">
                Enterprise MERN Architecture
              </span>
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
              v{config.app.version} ({config.env})
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

