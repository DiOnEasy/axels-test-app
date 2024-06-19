import { Navigate } from 'react-router-dom';

import { GalleryPage } from '../pages/galleryPage/GalleryPage';

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
        component: <>page not found</>
    }
];
