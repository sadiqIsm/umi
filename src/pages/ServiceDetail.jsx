import { useParams, Navigate, Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    Button,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Stack,
    Divider,
} from '@mui/material';
import {
    ExpandMore,
    CheckCircle,
    Email,
    Phone,
    LocationOn,
    ArrowForward,
    AccountBalance,
    Psychology,
    Calculate,
    FactCheck,
} from '@mui/icons-material';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';
import company from '../config/company';

const iconMap = {
    AccountBalance,
    Psychology,
    Calculate,
    FactCheck,
};

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = company.services[serviceId];

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const IconComponent = iconMap[service.icon] || AccountBalance;
    const otherServices = Object.values(company.services).filter((s) => s.id !== serviceId);

    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    background: `linear-gradient(135deg, ${service.color} 0%, #1F5AA6 100%)`,
                    color: 'white',
                    py: { xs: 8, md: 12 },
                }}
            >
                <Container maxWidth="lg">
                    <AnimatedSection>
                        <Grid container spacing={4} alignItems="center">
                            <Grid item xs={12} md={8}>
                                <Box
                                    sx={{
                                        display: 'inline-flex',
                                        p: 2,
                                        bgcolor: 'rgba(255,255,255,0.15)',
                                        borderRadius: 3,
                                        mb: 3,
                                    }}
                                >
                                    <IconComponent sx={{ fontSize: 48 }} />
                                </Box>
                                <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 3 }}>
                                    {service.title}
                                </Typography>
                                <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 400, mb: 4 }}>
                                    {service.shortDescription}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    href="#contact-form"
                                    endIcon={<ArrowForward />}
                                >
                                    Talk to an Expert
                                </Button>
                            </Grid>
                        </Grid>
                    </AnimatedSection>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
                <Grid container spacing={4}>
                    {/* Main Content */}
                    <Grid item xs={12} md={8}>
                        {/* How It Works */}
                        <AnimatedSection>
                            <Typography variant="h3" fontWeight={600} gutterBottom>
                                How It Works
                            </Typography>
                            <Typography color="text.secondary" sx={{ mb: 4 }}>
                                Our structured approach ensures quality delivery
                            </Typography>

                            <Stepper orientation="vertical">
                                {service.process.map((step, index) => (
                                    <Step key={index} active expanded>
                                        <StepLabel
                                            StepIconComponent={() => (
                                                <Box
                                                    sx={{
                                                        width: 36,
                                                        height: 36,
                                                        borderRadius: '50%',
                                                        bgcolor: service.color,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'white',
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    {index + 1}
                                                </Box>
                                            )}
                                        >
                                            <Typography variant="h6" fontWeight={600} sx={{ ml: 1 }}>
                                                {step.title}
                                            </Typography>
                                        </StepLabel>
                                        <StepContent sx={{ borderLeft: '2px solid', borderColor: 'grey.200', ml: 2 }}>
                                            <Typography color="text.secondary" sx={{ py: 2, pl: 1 }}>
                                                {step.description}
                                            </Typography>
                                        </StepContent>
                                    </Step>
                                ))}
                            </Stepper>
                        </AnimatedSection>

                        <Divider sx={{ my: 6 }} />

                        {/* What We Deliver */}
                        <AnimatedSection>
                            <Typography variant="h3" fontWeight={600} gutterBottom>
                                What We Deliver
                            </Typography>
                            <Typography color="text.secondary" sx={{ mb: 4 }}>
                                Tangible outcomes you can expect
                            </Typography>

                            <Grid container spacing={2}>
                                {service.deliverables.map((item, index) => (
                                    <Grid item xs={12} sm={6} key={index}>
                                        <Card
                                            sx={{
                                                p: 2,
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 2,
                                                height: '100%',
                                                borderLeft: 4,
                                                borderColor: service.color,
                                            }}
                                        >
                                            <CheckCircle sx={{ color: service.color }} />
                                            <Typography variant="body1" fontWeight={500}>
                                                {item}
                                            </Typography>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </AnimatedSection>

                        <Divider sx={{ my: 6 }} />

                        {/* FAQs */}
                        <AnimatedSection>
                            <Typography variant="h3" fontWeight={600} gutterBottom>
                                Common Questions
                            </Typography>
                            <Typography color="text.secondary" sx={{ mb: 4 }}>
                                Quick answers about our {service.title.toLowerCase()} services
                            </Typography>

                            {service.faqs.map((faq, index) => (
                                <Accordion
                                    key={index}
                                    sx={{
                                        mb: 2,
                                        '&:before': { display: 'none' },
                                        boxShadow: '0 2px 8px rgba(11, 45, 91, 0.08)',
                                    }}
                                >
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography fontWeight={600}>{faq.q}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography color="text.secondary">{faq.a}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </AnimatedSection>

                        <Divider sx={{ my: 6 }} />

                        {/* Contact Form */}
                        <AnimatedSection>
                            <Box id="contact-form">
                                <Typography variant="h3" fontWeight={600} gutterBottom>
                                    Request This Service
                                </Typography>
                                <Typography color="text.secondary" sx={{ mb: 4 }}>
                                    Fill out the form below and we'll get back to you within 24 hours
                                </Typography>

                                <Card sx={{ p: 4 }}>
                                    <ContactForm
                                        subject="Service Inquiry"
                                        service={service.title}
                                    />
                                </Card>
                            </Box>
                        </AnimatedSection>
                    </Grid>

                    {/* Sidebar */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ position: { md: 'sticky' }, top: 100 }}>
                            {/* Contact Info Card */}
                            <AnimatedSection variant="fadeInRight">
                                <Card sx={{ p: 3, mb: 3 }}>
                                    <Typography variant="h6" fontWeight={600} gutterBottom>
                                        Get in Touch
                                    </Typography>
                                    <Stack spacing={2}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <Email sx={{ color: 'secondary.main' }} />
                                            <Box>
                                                <Typography variant="caption" color="text.secondary">
                                                    Email
                                                </Typography>
                                                <Typography variant="body2" fontWeight={500}>
                                                    {company.contact.email}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <Phone sx={{ color: 'secondary.main' }} />
                                            <Box>
                                                <Typography variant="caption" color="text.secondary">
                                                    Phone
                                                </Typography>
                                                <Typography variant="body2" fontWeight={500}>
                                                    {company.contact.phones[0]}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                            <LocationOn sx={{ color: 'secondary.main' }} />
                                            <Box>
                                                <Typography variant="caption" color="text.secondary">
                                                    Address
                                                </Typography>
                                                <Typography variant="body2" fontWeight={500}>
                                                    {company.contact.address}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Stack>

                                    <Divider sx={{ my: 3 }} />

                                    <Stack spacing={1.5}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            color="secondary"
                                            startIcon={<Email />}
                                            href={`mailto:${company.contact.email}`}
                                        >
                                            Email Us
                                        </Button>
                                        <Button
                                            fullWidth
                                            variant="outlined"
                                            color="primary"
                                            startIcon={<Phone />}
                                            href={`tel:${company.contact.primaryPhone}`}
                                        >
                                            Call Now
                                        </Button>
                                    </Stack>
                                </Card>
                            </AnimatedSection>

                            {/* Other Services */}
                            <AnimatedSection variant="fadeInRight" delay={0.2}>
                                <Card sx={{ p: 3 }}>
                                    <Typography variant="h6" fontWeight={600} gutterBottom>
                                        Other Services
                                    </Typography>
                                    <Stack spacing={1}>
                                        {otherServices.map((s) => {
                                            const Icon = iconMap[s.icon] || AccountBalance;
                                            return (
                                                <Button
                                                    key={s.id}
                                                    component={RouterLink}
                                                    to={`/services/${s.id}`}
                                                    fullWidth
                                                    startIcon={<Icon />}
                                                    sx={{
                                                        justifyContent: 'flex-start',
                                                        color: 'text.secondary',
                                                        '&:hover': {
                                                            color: 'primary.main',
                                                            bgcolor: 'rgba(11, 45, 91, 0.04)',
                                                        },
                                                    }}
                                                >
                                                    {s.title}
                                                </Button>
                                            );
                                        })}
                                    </Stack>
                                </Card>
                            </AnimatedSection>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ServiceDetail;
