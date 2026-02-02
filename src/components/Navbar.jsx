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
    { label: 'About Us', path: '/what-we-do' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('up');
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 30,
    });

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Scroll direction detection
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Don't hide if we're near the top
            if (currentScrollY < 10) {
                setScrollDirection('up');
                setLastScrollY(currentScrollY);
                return;
            }

            // Determine scroll direction
            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setScrollDirection('down');
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up
                setScrollDirection('up');
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    return (
        <>
            <AppBar
                component={motion.header}
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: scrollDirection === 'down' ? -100 : 0,
                    opacity: scrollDirection === 'down' ? 0 : 1
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                position="fixed"
                elevation={0}
                sx={{
                    background: trigger
                        ? 'rgba(255, 255, 255, 0.98)'
                        : 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    borderBottom: trigger ? '1px solid rgba(11, 45, 91, 0.08)' : '1px solid transparent',
                    boxShadow: trigger
                        ? '0 8px 32px rgba(11, 45, 91, 0.08), 0 2px 8px rgba(11, 45, 91, 0.04)'
                        : '0 2px 12px rgba(11, 45, 91, 0.04)',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        sx={{
                            py: trigger ? { xs: 0.75, sm: 1 } : { xs: 1, sm: 1.5 },
                            px: 0,
                            transition: 'padding 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
                        }}
                    >
                        {/* Logo Section */}
                        <Box
                            component={RouterLink}
                            to="/"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                textDecoration: 'none',
                                gap: { xs: 1, sm: 1.5 },
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.02)',
                                },
                            }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            >
                                <Box
                                    component="img"
                                    src="/logo.png"
                                    alt={company.shortName}
                                    sx={{
                                        height: trigger
                                            ? { xs: 36, sm: 48 }
                                            : { xs: 40, sm: 56 },
                                        transition: 'height 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
                                    }}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                            </motion.div>
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
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: 'primary.main',
                                        fontWeight: 700,
                                        fontSize: trigger
                                            ? { xs: '0.7rem', sm: '1rem' }
                                            : { xs: '0.75rem', sm: '1.1rem' },
                                        lineHeight: { xs: 1.1, sm: 1.2 },
                                        transition: 'font-size 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
                                    }}
                                >
                                    {company.shortName}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: 'text.secondary',
                                        fontSize: trigger
                                            ? { xs: '0.5rem', sm: '0.65rem' }
                                            : { xs: '0.55rem', sm: '0.7rem' },
                                        lineHeight: 1.2,
                                        mt: { xs: 0.2, sm: 0 },
                                        transition: 'font-size 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
                                    }}
                                >
                                    Consulting • Accounting • Taxation
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />

                        {/* Desktop Navigation */}
                        <Stack
                            direction="row"
                            spacing={0.5}
                            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
                        >
                            {navItems.map((item) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <Button
                                        key={item.path}
                                        component={RouterLink}
                                        to={item.path}
                                        sx={{
                                            color: isActive ? 'primary.main' : 'text.primary',
                                            fontWeight: 500,
                                            fontSize: '0.95rem',
                                            px: 2.5,
                                            py: 1,
                                            position: 'relative',
                                            overflow: 'hidden',
                                            textTransform: 'none',
                                            letterSpacing: '0.3px',
                                            transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                bottom: 0,
                                                left: '50%',
                                                transform: 'translateX(-50%) scaleX(0)',
                                                width: '80%',
                                                height: '2px',
                                                background: 'linear-gradient(90deg, transparent, #C9A227, transparent)',
                                                borderRadius: '2px 2px 0 0',
                                                transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
                                            },
                                            '&:hover': {
                                                color: 'primary.main',
                                                letterSpacing: '0.5px',
                                                backgroundColor: 'rgba(11, 45, 91, 0.03)',
                                                '&::before': {
                                                    transform: 'translateX(-50%) scaleX(1)',
                                                },
                                            },
                                            ...(isActive && {
                                                color: 'primary.main',
                                                fontWeight: 600,
                                                '&::before': {
                                                    transform: 'translateX(-50%) scaleX(1)',
                                                },
                                            }),
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                );
                            })}

                            {/* Premium CTA Button */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button
                                    variant="contained"
                                    component={RouterLink}
                                    to="/contact"
                                    sx={{
                                        ml: 2,
                                        px: 3,
                                        py: 1,
                                        background: 'linear-gradient(135deg, #C9A227 0%, #d4b54d 50%, #C9A227 100%)',
                                        backgroundSize: '200% 100%',
                                        color: 'primary.main',
                                        fontWeight: 600,
                                        fontSize: '0.95rem',
                                        textTransform: 'none',
                                        borderRadius: 2,
                                        boxShadow: '0 4px 14px rgba(201, 162, 39, 0.3)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: '-100%',
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                                            transition: 'left 0.6s ease',
                                        },
                                        '&:hover': {
                                            backgroundPosition: '100% 0',
                                            boxShadow: '0 6px 24px rgba(201, 162, 39, 0.4), 0 2px 8px rgba(201, 162, 39, 0.2)',
                                            transform: 'translateY(-1px)',
                                            '&::before': {
                                                left: '100%',
                                            },
                                        },
                                        '&:active': {
                                            transform: 'translateY(0)',
                                        },
                                    }}
                                >
                                    Get Started
                                </Button>
                            </motion.div>
                        </Stack>

                        {/* Mobile Menu Button */}
                        <IconButton
                            color="primary"
                            aria-label="toggle menu"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{
                                display: { md: 'none' },
                                width: 44,
                                height: 44,
                                borderRadius: 2,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: 'rgba(11, 45, 91, 0.08)',
                                    transform: 'scale(1.05)',
                                },
                            }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={mobileOpen ? 'close' : 'menu'}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                                </motion.div>
                            </AnimatePresence>
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={handleDrawerToggle}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(11, 45, 91, 0.4)',
                                backdropFilter: 'blur(4px)',
                                WebkitBackdropFilter: 'blur(4px)',
                                zIndex: 1200,
                            }}
                        />

                        {/* Drawer Content */}
                        <Drawer
                            anchor="right"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            PaperProps={{
                                component: motion.div,
                                initial: { x: '100%' },
                                animate: { x: 0 },
                                exit: { x: '100%' },
                                transition: { type: 'spring', damping: 25, stiffness: 200 },
                                sx: {
                                    width: '85%',
                                    maxWidth: 360,
                                    background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
                                    backdropFilter: 'blur(24px)',
                                    WebkitBackdropFilter: 'blur(24px)',
                                    boxShadow: '-8px 0 32px rgba(11, 45, 91, 0.12)',
                                },
                            }}
                            sx={{
                                zIndex: 1300,
                            }}
                        >
                            <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                {/* Close Button */}
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
                                    <IconButton
                                        onClick={handleDrawerToggle}
                                        sx={{
                                            color: 'primary.main',
                                            '&:hover': {
                                                backgroundColor: 'rgba(11, 45, 91, 0.08)',
                                                transform: 'rotate(90deg)',
                                            },
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </Box>

                                {/* Navigation Items */}
                                <List sx={{ flex: 1 }}>
                                    {navItems.map((item, index) => {
                                        const isActive = location.pathname === item.path;
                                        return (
                                            <motion.div
                                                key={item.path}
                                                initial={{ opacity: 0, x: 40 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: index * 0.08,
                                                    duration: 0.4,
                                                    ease: [0.25, 0.1, 0.25, 1]
                                                }}
                                            >
                                                <ListItem disablePadding sx={{ mb: 1 }}>
                                                    <ListItemButton
                                                        component={RouterLink}
                                                        to={item.path}
                                                        sx={{
                                                            borderRadius: 2.5,
                                                            py: 1.75,
                                                            px: 2.5,
                                                            background: isActive
                                                                ? 'linear-gradient(135deg, rgba(11, 45, 91, 0.08) 0%, rgba(11, 45, 91, 0.04) 100%)'
                                                                : 'transparent',
                                                            borderLeft: isActive ? '3px solid' : '3px solid transparent',
                                                            borderColor: 'secondary.main',
                                                            transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
                                                            '&:hover': {
                                                                background: 'linear-gradient(135deg, rgba(11, 45, 91, 0.06) 0%, rgba(11, 45, 91, 0.03) 100%)',
                                                                transform: 'translateX(4px)',
                                                                borderLeft: '3px solid',
                                                                borderColor: 'secondary.main',
                                                            },
                                                        }}
                                                    >
                                                        <ListItemText
                                                            primary={item.label}
                                                            primaryTypographyProps={{
                                                                fontWeight: isActive ? 600 : 500,
                                                                fontSize: '1.05rem',
                                                                color: isActive ? 'primary.main' : 'text.primary',
                                                                letterSpacing: '0.3px',
                                                            }}
                                                        />
                                                    </ListItemButton>
                                                </ListItem>
                                            </motion.div>
                                        );
                                    })}
                                </List>

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.4 }}
                                >
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        component={RouterLink}
                                        to="/contact"
                                        size="large"
                                        sx={{
                                            py: 1.75,
                                            background: 'linear-gradient(135deg, #C9A227 0%, #d4b54d 50%, #C9A227 100%)',
                                            backgroundSize: '200% 100%',
                                            color: 'primary.main',
                                            fontWeight: 600,
                                            fontSize: '1.05rem',
                                            textTransform: 'none',
                                            borderRadius: 2.5,
                                            boxShadow: '0 4px 14px rgba(201, 162, 39, 0.3)',
                                            transition: 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
                                            '&:hover': {
                                                backgroundPosition: '100% 0',
                                                boxShadow: '0 6px 24px rgba(201, 162, 39, 0.4)',
                                                transform: 'translateY(-2px)',
                                            },
                                        }}
                                    >
                                        Get Started
                                    </Button>
                                </motion.div>
                            </Box>
                        </Drawer>
                    </>
                )}
            </AnimatePresence>

            <Toolbar sx={{ py: trigger ? { xs: 0.75, sm: 1 } : { xs: 1, sm: 1.5 } }} />
        </>
    );
};

export default Navbar;
