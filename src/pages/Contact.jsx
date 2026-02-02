import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    Button,
    Stack,
    Divider,
} from '@mui/material';
import {
    Email,
    Phone,
    LocationOn,
    AccessTime,
} from '@mui/icons-material';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';
import company from '../config/company';

const contactCards = [
    {
        icon: Email,
        title: 'Email Us',
        content: company.contact.email,
        action: `mailto:${company.contact.email}`,
        actionLabel: 'Send Email',
        color: '#0B2D5B',
    },
    {
        icon: Phone,
        title: 'Call Us',
        content: company.contact.phones.join(' / '),
        action: `tel:${company.contact.primaryPhone}`,
        actionLabel: 'Call Now',
        color: '#1F5AA6',
    },
    {
        icon: LocationOn,
        title: 'Visit Us',
        content: company.contact.address,
        action: null,
        actionLabel: 'Get Directions',
        color: '#C9A227',
    },
    {
        icon: AccessTime,
        title: 'Business Hours',
        content: 'Monday - Friday: 9:00 AM - 5:00 PM',
        action: null,
        actionLabel: null,
        color: '#6B7280',
    },
];

const Contact = () => {
    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #0B2D5B 0%, #1F5AA6 100%)',
                    color: 'white',
                    py: { xs: 8, md: 12 },
                }}
            >
                <Container maxWidth="lg">
                    <AnimatedSection>
                        <Box sx={{ maxWidth: 700 }}>
                            <Typography
                                variant="overline"
                                sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 2 }}
                            >
                                Get In Touch
                            </Typography>
                            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mt: 1, mb: 3 }}>
                                Contact Us
                            </Typography>
                            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 400 }}>
                                Ready to take control of your business compliance? Reach out to us today for
                                a free consultation. We're here to help you succeed.
                            </Typography>
                        </Box>
                    </AnimatedSection>
                </Container>
            </Box>

            {/* Contact Cards */}
            <Box sx={{ py: { xs: 6, md: 8 } }}>
                <Container maxWidth="lg">
                    <StaggerContainer>
                        <Grid container spacing={3}>
                            {contactCards.map((card, index) => {
                                const Icon = card.icon;
                                return (
                                    <Grid item xs={12} sm={6} md={3} key={index}>
                                        <StaggerItem>
                                            <Card
                                                sx={{
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    p: 3,
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        transform: 'translateY(-4px)',
                                                        boxShadow: '0 12px 30px rgba(11, 45, 91, 0.12)',
                                                    },
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 64,
                                                        height: 64,
                                                        borderRadius: '50%',
                                                        bgcolor: `${card.color}15`,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        mx: 'auto',
                                                        mb: 2,
                                                    }}
                                                >
                                                    <Icon sx={{ fontSize: 28, color: card.color }} />
                                                </Box>
                                                <Typography variant="h6" fontWeight={600} gutterBottom>
                                                    {card.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{ mb: 2, minHeight: 40 }}
                                                >
                                                    {card.content}
                                                </Typography>
                                                {card.action && (
                                                    <Button
                                                        variant="outlined"
                                                        size="small"
                                                        href={card.action}
                                                        sx={{
                                                            borderColor: card.color,
                                                            color: card.color,
                                                            '&:hover': {
                                                                borderColor: card.color,
                                                                bgcolor: `${card.color}08`,
                                                            },
                                                        }}
                                                    >
                                                        {card.actionLabel}
                                                    </Button>
                                                )}
                                            </Card>
                                        </StaggerItem>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </StaggerContainer>
                </Container>
            </Box>

            {/* Map and Form Section */}
            <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.subtle' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {/* Map */}
                        <Grid item xs={12} md={6}>
                            <AnimatedSection variant="fadeInLeft">
                                <Typography variant="h4" fontWeight={600} gutterBottom>
                                    Our Location
                                </Typography>
                                <Typography color="text.secondary" sx={{ mb: 3 }}>
                                    {company.contact.address}
                                </Typography>
                                <Box
                                    sx={{
                                        borderRadius: 3,
                                        overflow: 'hidden',
                                        height: 400,
                                        boxShadow: '0 4px 20px rgba(11, 45, 91, 0.1)',
                                    }}
                                >
                                    <iframe
                                        title="Office Location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1!2d7.43!3d9.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDQnMTIuMCJOIDfCsDI1JzQ4LjAiRQ!5e0!3m2!1sen!2sng!4v1600000000000!5m2!1sen!2sng"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </Box>

                                <Card sx={{ mt: 3, p: 3 }}>
                                    <Typography variant="h6" fontWeight={600} gutterBottom>
                                        Partner
                                    </Typography>
                                    <Typography variant="body1" fontWeight={500}>
                                        {company.legal.partner}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {company.legal.partnerTitle}
                                    </Typography>
                                    <Divider sx={{ my: 2 }} />
                                    <Typography variant="body2" color="text.secondary">
                                        RC: {company.legal.rc}
                                    </Typography>
                                </Card>
                            </AnimatedSection>
                        </Grid>

                        {/* Contact Form */}
                        <Grid item xs={12} md={6}>
                            <AnimatedSection variant="fadeInRight">
                                <Typography variant="h4" fontWeight={600} gutterBottom>
                                    Send Us a Message
                                </Typography>
                                <Typography color="text.secondary" sx={{ mb: 3 }}>
                                    Fill out the form below and we'll respond within 24 hours.
                                </Typography>
                                <Card sx={{ p: 4 }}>
                                    <ContactForm subject="Website Contact Form" />
                                </Card>
                            </AnimatedSection>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Quick Contact Strip */}
            <Box
                sx={{
                    py: 4,
                    bgcolor: 'primary.main',
                    color: 'white',
                }}
            >
                <Container maxWidth="lg">
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={3}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Typography variant="h6" fontWeight={500}>
                            Prefer to call?
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            {company.contact.phones.map((phone, index) => (
                                <Button
                                    key={index}
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<Phone />}
                                    href={`tel:${phone.replace(/-/g, '')}`}
                                >
                                    {phone}
                                </Button>
                            ))}
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};

export default Contact;
