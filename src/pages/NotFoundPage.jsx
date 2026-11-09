import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button.jsx';
import { APP_ROUTES } from '../constants/routes.js';

export const NotFoundPage = () => {
  return (
    <div className="text-center py-20 space-y-4">
      <h1 className="text-6xl font-extrabold text-gray-300">404</h1>
      <h2 className="text-2xl font-bold text-gray-900">Page Not Found</h2>
      <p className="text-sm text-gray-500 max-w-sm mx-auto">
        The page you are looking for does not exist or has been moved.
      </p>
      <div>
        <Link to={APP_ROUTES.HOME}>
          <Button variant="primary">Return Home</Button>
        </Link>
      </div>
    </div>
  );
};
