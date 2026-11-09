import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout.jsx';
import { HomePage } from '../pages/HomePage.jsx';
import { NotFoundPage } from '../pages/NotFoundPage.jsx';
import { APP_ROUTES } from '../constants/routes.js';

export const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<HomePage />} />
        {/* Future routes: /login, /register, /dashboard */}
        <Route path={APP_ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
};

