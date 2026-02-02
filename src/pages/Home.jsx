import { Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    Chip,
    Stack,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Alert,
} from '@mui/material';
import {
    Shield,
    Schedule,
    Security,
    SupportAgent,
    Assessment,
    Verified,
    Business,
    Groups,
    Storefront,
    Engineering,
    AccountBalance,
    Handshake,
    CheckCircle,
    Warning,
    Email,
    Phone,
    LocationOn,
} from '@mui/icons-material';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import ServiceCard from '../components/ServiceCard';
import company from '../config/company';

const iconMap = {
    Shield,
    Schedule,
    Security,
    Support: SupportAgent,
    Assessment,
    Verified,
};

const industryIcons = {
    SMEs: Business,
    Startups: Engineering,
    NGOs: Groups,
    'Professional Services': Handshake,
    Retail: Storefront,
    Contractors: AccountBalance,
};

const Home = () => {
    const services = Object.values(company.services);

    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #0B2D5B 0%, #1F5AA6 50%, #0B2D5B 100%)',
                    color: 'white',
                    py: { xs: 10, md: 16 },
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    },
                }}
            >
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <AnimatedSection>
                                <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
                                    {company.trustBadges.map((badge) => (
                                        <Chip
                                            key={badge}
                                            label={badge}
                                            size="small"
                                            icon={<Verified sx={{ fontSize: 16 }} />}
                                            sx={{
                                                bgcolor: 'rgba(201, 162, 39, 0.2)',
                                                color: 'secondary.main',
                                                borderColor: 'secondary.main',
                                                fontWeight: 500,
                                            }}
                                            variant="outlined"
                                        />
                                    ))}
                                </Stack>

                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                                        fontWeight: 700,
                                        lineHeight: 1.2,
                                        mb: 3,
                                    }}
                                >
                                    Tax Compliance,{' '}
                                    <Box component="span" sx={{ color: 'secondary.main' }}>
                                        Company Registration
                                    </Box>{' '}
                                    & Expert Auditing
                                </Typography>

                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: 'rgba(255,255,255,0.8)',
                                        fontWeight: 400,
                                        mb: 4,
                                        maxWidth: 500,
                                    }}
                                >
                                    {company.description}
                                </Typography>

                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                    <Button
                                        component={RouterLink}
                                        to="/contact"
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        sx={{ px: 4 }}
                                    >
                                        Book a Consultation
                                    </Button>
                                    <Button
                                        component={RouterLink}
                                        to="/services"
                                        variant="outlined"
                                        size="large"
                                        sx={{
                                            px: 4,
                                            color: 'white',
                                            borderColor: 'rgba(255,255,255,0.5)',
                                            '&:hover': {
                                                borderColor: 'white',
                                                bgcolor: 'rgba(255,255,255,0.1)',
                                            },
                                        }}
                                    >
                                        View Services
                                    </Button>
                                </Stack>
                            </AnimatedSection>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <AnimatedSection variant="fadeInRight" delay={0.3}>
                                <Box
                                    sx={{
                                        p: 4,
                                        bgcolor: 'rgba(255,255,255,0.1)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: 4,
                                        border: '1px solid rgba(255,255,255,0.2)',
                                    }}
                                >
                                    <Typography variant="h5" fontWeight={600} gutterBottom>
                                        Our Expertise
                                    </Typography>
                                    <Stack spacing={1}>
                                        {company.serviceKeywords.map((keyword) => (
                                            <Box
                                                key={keyword}
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1.5,
                                                }}
                                            >
                                                <CheckCircle sx={{ fontSize: 20, color: 'secondary.main' }} />
                                                <Typography>{keyword}</Typography>
                                            </Box>
                                        ))}
                                    </Stack>
                                </Box>
                            </AnimatedSection>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Core Services Section */}
            <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.subtle' }}>
                <Container maxWidth="lg">
                    <AnimatedSection>
                        <Box sx={{ textAlign: 'center', mb: 6 }}>
                            <Typography
                                variant="overline"
                                sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 2 }}
                            >
                                What We Offer
                            </Typography>
                            <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
                                Core Services
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ maxWidth: 600, mx: 'auto' }}
                            >
                                Comprehensive professional services to keep your business compliant,
                                efficient, and positioned for growth.
                            </Typography>
                        </Box>
                    </AnimatedSection>

                    <StaggerContainer>
                        <Grid container spacing={3}>
                            {services.map((service) => (
                                <Grid item xs={12} sm={6} md={3} key={service.id}>
                                    <StaggerItem>
                                        <ServiceCard service={service} variant="compact" />
                                    </StaggerItem>
                                </Grid>
                            ))}
                        </Grid>
                    </StaggerContainer>
                </Container>
            </Box>

            {/* Why Choose Us Section */}
            <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <AnimatedSection>
                        <Box sx={{ textAlign: 'center', mb: 6 }}>
                            <Typography
                                variant="overline"
                                sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 2 }}
                            >
                                Our Difference
                            </Typography>
                            <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
                                Why Choose Us
                            </Typography>
                        </Box>
                    </AnimatedSection>

                    <StaggerContainer>
                        <Grid container spacing={3}>
                            {company.features.map((feature, index) => {
                                const Icon = iconMap[feature.icon] || Shield;
                                return (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <StaggerItem>
                                            <Card
                                                sx={{
                                                    height: '100%',
                                                    p: 3,
                                                    textAlign: 'center',
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        transform: 'translateY(-4px)',
                                                    },
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: 'inline-flex',
                                                        p: 2,
                                                        borderRadius: '50%',
                                                        bgcolor: 'primary.main',
                                                        color: 'white',
                                                        mb: 2,
                                                    }}
                                                >
                                                    <Icon sx={{ fontSize: 28 }} />
                                                </Box>
                                                <Typography variant="h6" fontWeight={600} gutterBottom>
                                                    {feature.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {feature.description}
                                                </Typography>
                                            </Card>
                                        </StaggerItem>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </StaggerContainer>
                </Container>
            </Box>

            {/* Industries Section */}
            <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'primary.main', color: 'white' }}>
                <Container maxWidth="lg">
                    <AnimatedSection>
                        <Box sx={{ textAlign: 'center', mb: 6 }}>
                            <Typography
                                variant="overline"
                                sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 2 }}
                            >
                                Who We Serve
                            </Typography>
                            <Typography variant="h2" sx={{ mt: 1, mb: 2, color: 'white' }}>
                                Industries & Clients
                            </Typography>
                        </Box>
                    </AnimatedSection>

                    <StaggerContainer>
                        <Grid container spacing={3} justifyContent="center">
                            {company.industries.map((industry, index) => {
                                const Icon = industryIcons[industry] || Business;
                                return (
                                    <Grid item xs={6} sm={4} md={2} key={index}>
                                        <StaggerItem>
                                            <Box
                                                sx={{
                                                    textAlign: 'center',
                                                    p: 3,
                                                    borderRadius: 3,
                                                    bgcolor: 'rgba(255,255,255,0.08)',
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        bgcolor: 'rgba(255,255,255,0.15)',
                                                        transform: 'scale(1.05)',
                                                    },
                                                }}
                                            >
                                                <Icon sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
                                                <Typography variant="body2" fontWeight={500}>
                                                    {industry}
                                                </Typography>
                                            </Box>
                                        </StaggerItem>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </StaggerContainer>
                </Container>
            </Box>

            {/* Tax Information Section */}
            <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.subtle' }}>
                <Container maxWidth="lg">
                    <AnimatedSection>
                        <Box sx={{ textAlign: 'center', mb: 6 }}>
                            <Typography
                                variant="overline"
                                sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 2 }}
                            >
                                Business Guidance
                            </Typography>
                            <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
                                Stay Compliant
                            </Typography>
                        </Box>
                    </AnimatedSection>

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <AnimatedSection variant="fadeInLeft">
                                <Card sx={{ height: '100%', p: 4 }}>
                                    <Typography variant="h5" fontWeight={600} gutterBottom color="primary">
                                        <CheckCircle sx={{ verticalAlign: 'middle', mr: 1, color: 'secondary.main' }} />
                                        Compliance Checklist
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                        Essential requirements for Nigerian businesses
                                    </Typography>
                                    <List>
                                        {company.complianceInfo.checklist.map((item, index) => (
                                            <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                                                <ListItemIcon sx={{ minWidth: 36 }}>
                                                    <CheckCircle sx={{ fontSize: 20, color: 'success.main' }} />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={item}
                                                    primaryTypographyProps={{ variant: 'body2' }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Card>
                            </AnimatedSection>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <AnimatedSection variant="fadeInRight">
                                <Card sx={{ height: '100%', p: 4 }}>
                                    <Typography variant="h5" fontWeight={600} gutterBottom color="primary">
                                        <Warning sx={{ verticalAlign: 'middle', mr: 1, color: 'warning.main' }} />
                                        Common Mistakes to Avoid
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                        Issues that can trigger penalties
                                    </Typography>
                                    <List>
                                        {company.complianceInfo.commonMistakes.map((item, index) => (
                                            <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                                                <ListItemIcon sx={{ minWidth: 36 }}>
                                                    <Warning sx={{ fontSize: 20, color: 'warning.main' }} />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={item}
                                                    primaryTypographyProps={{ variant: 'body2' }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Card>
                            </AnimatedSection>
                        </Grid>
                    </Grid>

                    <AnimatedSection delay={0.3}>
                        <Alert
                            severity="info"
                            sx={{
                                mt: 4,
                                borderRadius: 2,
                                '& .MuiAlert-icon': { color: 'primary.main' },
                            }}
                        >
                            <Typography variant="body2">
                                {company.complianceInfo.disclaimer}
                            </Typography>
                        </Alert>
                    </AnimatedSection>
                </Container>
            </Box>

            {/* Contact Teaser */}
            <Box
                sx={{
                    py: { xs: 6, md: 8 },
                    background: 'linear-gradient(135deg, #C9A227 0%, #d4b54d 100%)',
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <AnimatedSection>
                                <Typography variant="h3" fontWeight={700} color="primary.main" gutterBottom>
                                    Ready to Get Started?
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'primary.dark', mb: 2 }}>
                                    Contact us today for a free consultation
                                </Typography>
                            </AnimatedSection>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <AnimatedSection variant="fadeInRight">
                                <Stack spacing={2}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <LocationOn sx={{ color: 'primary.main' }} />
                                        <Typography variant="body1" color="primary.main">
                                            {company.contact.address}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Email sx={{ color: 'primary.main' }} />
                                        <Typography variant="body1" color="primary.main">
                                            {company.contact.email}
                                        </Typography>
                                    </Box>
                                    <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            startIcon={<Email />}
                                            href={`mailto:${company.contact.email}`}
                                        >
                                            Email Us
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            startIcon={<Phone />}
                                            href={`tel:${company.contact.primaryPhone}`}
                                            sx={{
                                                color: 'primary.main',
                                                borderColor: 'primary.main',
                                                '&:hover': {
                                                    borderColor: 'primary.dark',
                                                    bgcolor: 'rgba(11,45,91,0.1)',
                                                },
                                            }}
                                        >
                                            Call Now
                                        </Button>
                                    </Stack>
                                </Stack>
                            </AnimatedSection>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Home;
