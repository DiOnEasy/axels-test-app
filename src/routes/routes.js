import React from 'react';
import { Navigate } from 'react-router-dom';

import { GalleryPage } from 'pages/GalleryPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export const routes = [
    {
        path: '/',
        component: <Navigate to={'/gallery'} />
    },
    {
        path: '/gallery/:id',
        component: <GalleryPage />
    },
    {
        path: '/gallery',
        component: <GalleryPage />
    },
    {
        path: '*',
        component: <NotFoundPage />
    }
];
