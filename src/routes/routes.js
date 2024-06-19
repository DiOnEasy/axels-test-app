import { Navigate } from 'react-router-dom';

import { GalleryPage } from '../pages/galleryPage/GalleryPage';
import { NotFoundPage } from '../pages/notFoundPage/NotFoundPage';

export const routes = [
    {
        path: '/',
        component: <Navigate to="/gallery" />
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
