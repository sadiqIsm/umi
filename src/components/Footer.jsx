import { Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    Stack,
    Divider,
} from '@mui/material';
import {
    Email as EmailIcon,
    Phone as PhoneIcon,
    LocationOn as LocationIcon,
    Language as WebIcon,
} from '@mui/icons-material';
import company from '../config/company';

const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/what-we-do' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
];

const serviceLinks = [
    { label: 'Taxation', path: '/services/taxation' },
    { label: 'Consulting', path: '/services/consulting' },
    { label: 'Accounting', path: '/services/accounting' },
    { label: 'Auditing', path: '/services/auditing' },
];

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                background: 'linear-gradient(180deg, #0B2D5B 0%, #071d3a 100%)',
                color: 'white',
                pt: 8,
                pb: 4,
                mt: 'auto',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Company Info */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" fontWeight={700} gutterBottom>
                            {company.shortName}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>
                            {company.tagline}
                        </Typography>

                        <Stack spacing={1.5}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                                <LocationIcon sx={{ fontSize: 20, color: 'secondary.main', mt: 0.3 }} />
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                                    {company.contact.address}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <EmailIcon sx={{ fontSize: 20, color: 'secondary.main' }} />
                                <Link
                                    href={`mailto:${company.contact.email}`}
                                    sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', '&:hover': { color: 'secondary.main' } }}
                                >
                                    {company.contact.email}
                                </Link>
                            </Box>
                            {company.contact.phones.map((phone, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                    <PhoneIcon sx={{ fontSize: 20, color: 'secondary.main' }} />
                                    <Link
                                        href={`tel:${phone.replace(/-/g, '')}`}
                                        sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', '&:hover': { color: 'secondary.main' } }}
                                    >
                                        {phone}
                                    </Link>
                                </Box>
                            ))}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <WebIcon sx={{ fontSize: 20, color: 'secondary.main' }} />
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                                    {company.contact.website}
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: 'secondary.main' }}>
                            Quick Links
                        </Typography>
                        <Stack spacing={1}>
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    component={RouterLink}
                                    to={link.path}
                                    sx={{
                                        color: 'rgba(255,255,255,0.7)',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        transition: 'all 0.2s',
                                        '&:hover': { color: 'white', pl: 0.5 },
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Services */}
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: 'secondary.main' }}>
                            Services
                        </Typography>
                        <Stack spacing={1}>
                            {serviceLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    component={RouterLink}
                                    to={link.path}
                                    sx={{
                                        color: 'rgba(255,255,255,0.7)',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        transition: 'all 0.2s',
                                        '&:hover': { color: 'white', pl: 0.5 },
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Partner Info */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: 'secondary.main' }}>
                            Partner
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 1 }}>
                            {company.legal.partner}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                            {company.legal.partnerTitle}
                        </Typography>

                        <Box sx={{ mt: 3, p: 2, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 2 }}>
                            <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 600 }}>
                                RC: {company.legal.rc}
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                                Registered with Corporate Affairs Commission
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

                {/* Bottom Bar */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', textAlign: { xs: 'center', sm: 'left' } }}>
                        © {new Date().getFullYear()} {company.name}. All rights reserved.
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', textAlign: { xs: 'center', sm: 'right' }, maxWidth: 400 }}>
                        {company.complianceInfo.disclaimer.slice(0, 100)}...
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
