import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    Container,
    useScrollTrigger,
    Stack,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import company from '../config/company';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'What We Do', path: '/what-we-do' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    return (
        <>
            <AppBar
                component={motion.header}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                position="fixed"
                sx={{
                    background: trigger
                        ? 'rgba(255, 255, 255, 0.95)'
                        : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: trigger
                        ? '0 4px 30px rgba(11, 45, 91, 0.1)'
                        : 'none',
                    transition: 'all 0.3s ease',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar sx={{ py: 1, px: 0 }}>
                        <Box
                            component={RouterLink}
                            to="/"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                textDecoration: 'none',
                                gap: 1.5,
                            }}
                        >
                            <Box
                                component="img"
                                src="/logo.png"
                                alt={company.shortName}
                                sx={{ height: 56 }}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <Box
                                sx={{
                                    display: 'none',
                                    width: 40,
                                    height: 40,
                                    borderRadius: 2,
                                    background: 'linear-gradient(135deg, #0B2D5B 0%, #1F5AA6 100%)',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
                                    U
                                </Typography>
                            </Box>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: 'primary.main',
                                        fontWeight: 700,
                                        fontSize: '1.1rem',
                                        lineHeight: 1.2,
                                    }}
                                >
                                    {company.shortName}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: 'text.secondary',
                                        fontSize: '0.7rem',
                                    }}
                                >
                                    Consulting • Accounting • Taxation
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />

                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
                        >
                            {navItems.map((item) => (
                                <Button
                                    key={item.path}
                                    component={RouterLink}
                                    to={item.path}
                                    sx={{
                                        color: location.pathname === item.path ? 'primary.main' : 'text.secondary',
                                        fontWeight: location.pathname === item.path ? 600 : 500,
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 6,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: location.pathname === item.path ? '60%' : '0%',
                                            height: 2,
                                            backgroundColor: 'secondary.main',
                                            borderRadius: 1,
                                            transition: 'width 0.3s ease',
                                        },
                                        '&:hover::after': {
                                            width: '60%',
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                            <Button
                                variant="contained"
                                color="secondary"
                                component={RouterLink}
                                to="/contact"
                                sx={{ ml: 2 }}
                            >
                                Get Started
                            </Button>
                        </Stack>

                        <IconButton
                            color="primary"
                            aria-label="open menu"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            <AnimatePresence>
                {mobileOpen && (
                    <Drawer
                        anchor="right"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        PaperProps={{
                            sx: {
                                width: '100%',
                                maxWidth: 320,
                                background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
                            },
                        }}
                    >
                        <Box sx={{ p: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                                <IconButton onClick={handleDrawerToggle} color="primary">
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                            <List>
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.path}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <ListItem disablePadding>
                                            <ListItemButton
                                                component={RouterLink}
                                                to={item.path}
                                                sx={{
                                                    borderRadius: 2,
                                                    mb: 0.5,
                                                    backgroundColor: location.pathname === item.path
                                                        ? 'rgba(11, 45, 91, 0.08)'
                                                        : 'transparent',
                                                }}
                                            >
                                                <ListItemText
                                                    primary={item.label}
                                                    primaryTypographyProps={{
                                                        fontWeight: location.pathname === item.path ? 600 : 500,
                                                        color: location.pathname === item.path
                                                            ? 'primary.main'
                                                            : 'text.secondary',
                                                    }}
                                                />
                                            </ListItemButton>
                                        </ListItem>
                                    </motion.div>
                                ))}
                            </List>
                            <Box sx={{ mt: 3, px: 2 }}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    component={RouterLink}
                                    to="/contact"
                                    size="large"
                                >
                                    Get Started
                                </Button>
                            </Box>
                        </Box>
                    </Drawer>
                )}
            </AnimatePresence>

            <Toolbar />
        </>
    );
};

export default Navbar;
