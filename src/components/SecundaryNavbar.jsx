import { useState } from 'react';
import { AppBar, Toolbar, Box, Link } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

export const SecondaryNavbar = ({ children }) => {
    const [selectedType, setSelectedType] = useState(null);
    const { name } = useParams();
    const navigate = useNavigate();

    const handleFilterClick = (name, type) => {
        setSelectedType(type);
        navigate(`/category/${name}/${type}`);
    };

    return (
        <>
            <AppBar position="fixed" color="inherit" elevation={0} sx={{ boxShadow: 'none', mt: {xs:8, sm:6, md:8} }}>
                <Toolbar sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link
                        onClick={() => handleFilterClick(name, 'Camisetas')}
                        underline="none"
                        variant={selectedType === 'Camisetas' ? 'contained' : 'text'}
                        sx={{
                            ...(selectedType === 'Camisetas' && {
                                color: 'white',
                                textShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)'
                            }),
                            color: '#101010',
                            textTransform: 'none',
                            cursor: 'pointer',
                            mx: 2,
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: '200',
                            '&:hover': {
                                textDecoration: 'none',
                            },
                        }}
                    >
                        Camisetas
                    </Link>
                    <Link
                        onClick={() => handleFilterClick(name, 'Jeans')}
                        underline="none"
                        variant={selectedType === 'Jeans' ? 'contained' : 'text'}
                        sx={{
                            ...(selectedType === 'Jeans' && {
                                color: 'white',
                                textShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)'
                            }),
                            color: '#101010',
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: '200',
                            textTransform: 'none',
                            cursor: 'pointer',
                            mx: 2,
                            '&:hover': {
                                textDecoration: 'none',
                            },
                        }}
                    >
                        Jeans
                    </Link>
                    <Link
                        onClick={() => handleFilterClick(name, 'Calzado')}
                        underline="none"
                        variant={selectedType === 'Calzado' ? 'contained' : 'text'}
                        sx={{
                            ...(selectedType === 'Calzado' && {
                                color: 'white',
                                textShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)'

                            }),
                            color: '#101010',
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: '200',
                            textTransform: 'none',
                            cursor: 'pointer',
                            mx: 2,
                            '&:hover': {
                                textDecoration: 'none',
                            },
                        }}
                    >
                        Calzado
                    </Link>
                    <Link
                        onClick={() => handleFilterClick(name, 'Accesorios')}
                        underline="none"
                        variant={selectedType === 'Accesorios' ? 'contained' : 'text'}
                        sx={{
                            ...(selectedType === 'Accesorios' && {
                                color: '#0c0c0c',
                                textShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)'
                            }),
                            color: '#101010',
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: '200',
                            textTransform: 'none',
                            cursor: 'pointer',
                            mx: 2,
                            '&:hover': {
                                textDecoration: 'none',
                            },
                        }}
                    >
                        Accesorios
                    </Link>
                </Toolbar>
            </AppBar>
            {/* Renderiza los hijos, en este caso el componente ContentProducts */}
            {children}
        </>
    );
};
