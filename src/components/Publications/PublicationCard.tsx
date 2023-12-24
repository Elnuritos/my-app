import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IPublication } from '../../utils/types';

interface PublicationCardProps {
    publication: IPublication;
}
const PublicationCard = ({ publication }: PublicationCardProps) => {
    return (
        <Card variant="outlined" sx={{ margin: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {publication.title}
                </Typography>
                <Typography color="text.secondary">
                    By {publication.author} on {publication.date}
                </Typography>
                <Typography variant="body2">
                    {publication.content}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PublicationCard;
