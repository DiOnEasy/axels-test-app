import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { StyledHeader } from 'styled/StyledHeader';

export const Header: FC = () => (
    <StyledHeader>
        Test app
        <div
            style={{
                display: 'flex',
                gap: '15px',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '20px'
            }}
        >
            <Link to={'/gallery'}>Gallery</Link>
            <Link to={'/table'}>Table</Link>
        </div>
    </StyledHeader>
);
