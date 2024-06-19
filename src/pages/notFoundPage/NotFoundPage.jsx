import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
    <Box component={'section'} sx={{ textAlign: 'center' }}>
        <Typography>Error 404</Typography>
        <Typography>Page not found</Typography>
        <Link to={'/'}>Go to main page</Link>
    </Box>
);
