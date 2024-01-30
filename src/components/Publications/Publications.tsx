import React, { useState, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import { IPublication } from '../../utils/types';
import PublicationCard from './PublicationCard';
import { mockPublications as initialPublications } from '../../utils/mockPublications';

const Publications = () => {
    const [filteredPublications, setFilteredPublications] = useState(initialPublications);

    const search = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();

        const filteredBooks = initialPublications.filter((publication) => 
            publication.title.toLowerCase().includes(query)
        );

        setFilteredPublications(filteredBooks);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input type="text" onChange={search} placeholder="Search by title..." />
            {filteredPublications.map((publication: IPublication) => (
                <PublicationCard key={publication.id} publication={publication} />
            ))}
        </Box>
    );
};

export default Publications;
