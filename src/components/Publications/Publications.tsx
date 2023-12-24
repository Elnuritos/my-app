import React from 'react';
import Box from '@mui/material/Box';
import { mockPublications } from '../../utils/mockPublications';
import PublicationCard from './PublicationCard';

const Publications = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {mockPublications.map(pub => (
                <PublicationCard key={pub.id} publication={pub} />
            ))}
        </Box>
    );
};

export default Publications;
