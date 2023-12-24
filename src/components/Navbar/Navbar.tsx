import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

type Props = {}

const Navbar = (props: Props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Searching for:', searchTerm);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Library App</Link>
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button color="inherit">About</Button>
                    </Link>
                    <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button color="inherit">Login</Button>
                    </Link>
                    <form onSubmit={handleSearch} style={{ display: 'flex' }}>
                        <TextField
                            label="Search"
                            variant="outlined"
                            size="small"
                            sx={{ mr: 2, ml: 2 }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button type="submit" variant="contained" color="primary">Search</Button>
                    </form>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
