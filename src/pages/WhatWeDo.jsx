import { Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
    Stack,
} from '@mui/material';
import {
    ExpandMore,
    CheckCircle,
    Search,
    Description,
    CloudUpload,
    Gavel,
    SupportAgent,
    ArrowForward,
} from '@mui/icons-material';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import company from '../config/company';

const processSteps = [
    {
        title: 'Discovery & Compliance Review',
        description: 'We begin by understanding your business structure, current tax position, and compliance status. This thorough review identifies gaps and opportunities.',
        icon: Search,
    },
    {
        title: 'Documentation & Registration',
        description: 'We ensure all your business registrations are in order - CAC, TIN, VAT registration, and any industry-specific requirements.',
        icon: Description,
    },
    {
        title: 'Filing & Reporting',
        description: 'Timely preparation and submission of all statutory filings - tax returns, annual reports, PAYE, and regulatory submissions.',
        icon: CloudUpload,
    },
    {
        title: 'Audit Support',
        description: 'We prepare your records for audit readiness and provide representation during statutory or external audits.',
        icon: Gavel,
    },
    {
        title: 'Continuous Advisory',
        description: 'Ongoing support to keep you informed of regulatory changes, optimize your tax position, and ensure continued compliance.',
        icon: SupportAgent,
    },
];

const whatYouGet = [
    'Dedicated account manager for your business',
    'Monthly compliance status updates',
    'Proactive deadline reminders',
    'Access to our client portal',
    'Priority response within 24 hours',
    'Quarterly review meetings',
    'Annual tax planning session',
    'Representation before tax authorities',
];

const faqs = [
    {
        q: 'What documents do I need to get started?',
        a: 'To get started, we typically need your CAC registration documents, TIN certificate, recent financial statements, bank statements, and any existing tax clearance certificates. We will provide a complete checklist during our initial consultation.',
    },
    {
        q: 'How long does the onboarding process take?',
        a: 'Most clients are fully onboarded within 2-4 weeks, depending on the complexity of their business and the state of their existing records. We work efficiently to minimize disruption to your operations.',
    },
    {
        q: 'Do you work with businesses outside Abuja?',
        a: 'Yes, we serve clients across Nigeria. While our office is in Abuja, we work remotely with businesses nationwide and can arrange in-person meetings when needed.',
    },
    {
        q: 'What industries do you specialize in?',
        a: 'We work across multiple sectors including SMEs, startups, NGOs, professional services, retail, and contracting businesses. Our team has experience with sector-specific regulations and requirements.',
    },
    {
        q: 'How do you handle sensitive financial information?',
        a: 'We maintain strict confidentiality protocols and are bound by professional ethics. All client information is securely stored and accessed only by authorized team members.',
    },
    {
        q: 'What are your service fees?',
        a: 'Our fees depend on the scope of services required and the complexity of your business. We offer transparent pricing and will provide a detailed proposal after understanding your needs.',
    },
];

const WhatWeDo = () => {
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
                        <Box sx={{ maxWidth: 800 }}>
                            <Typography
                                variant="overline"
                                sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 2 }}
                            >
                                Our Approach
                            </Typography>
                            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mt: 1, mb: 3 }}>
                                What We Do
                            </Typography>
                            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 400 }}>
                                We provide comprehensive tax, accounting, and advisory services tailored to Nigerian
                                businesses. Our structured approach ensures you stay compliant while focusing on
                                what matters most - growing your business.
                            </Typography>
                        </Box>
                    </AnimatedSection>
                </Container>
            </Box>

            {/* Process Timeline */}
            <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <AnimatedSection>
                        <Box sx={{ textAlign: 'center', mb: 6 }}>
                            <Typography
                                variant="overline"
                                sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 2 }}
                            >
                                How We Work
                            </Typography>
                            <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
                                Our Process
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                                A systematic approach to bringing your business into full compliance and keeping it there.
                            </Typography>
                        </Box>
                    </AnimatedSection>

                    <AnimatedSection>
                        <Stepper orientation="vertical" sx={{ maxWidth: 700, mx: 'auto' }}>
                            {processSteps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <Step key={index} active expanded>
                                        <StepLabel
                                            StepIconComponent={() => (
                                                <Box
                                                    sx={{
                                                        width: 48,
                                                        height: 48,
                                                        borderRadius: '50%',
                                                        bgcolor: 'primary.main',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'white',
                                                    }}
                                                >
                                                    <Icon />
                                                </Box>
                                            )}
                                        >
                                            <Typography variant="h5" fontWeight={600} sx={{ ml: 2 }}>
                                                {step.title}
                                            </Typography>
                                        </StepLabel>
                                        <StepContent sx={{ borderLeft: '2px solid', borderColor: 'grey.200', ml: 3 }}>
                                            <Typography color="text.secondary" sx={{ py: 2, pl: 2 }}>
                                                {step.description}
                                            </Typography>
                                        </StepContent>
                                    </Step>
                                );
                            })}
                        </Stepper>
                    </AnimatedSection>
                </Container>
            </Box>

            {/* What You Get */}
            <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.subtle' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={5}>
                            <AnimatedSection>
                                <Typography
                                    variant="overline"
                                    sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 2 }}
                                >
                                    Client Benefits
                                </Typography>
                                <Typography variant="h2" sx={{ mt: 1, mb: 3 }}>
                                    What You Get
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                                    When you work with {company.shortName}, you're not just hiring a service provider -
                                    you're gaining a trusted partner invested in your success.
                                </Typography>
                                <Button
                                    component={RouterLink}
                                    to="/contact"
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    endIcon={<ArrowForward />}
                                >
                                    Get Started
                                </Button>
                            </AnimatedSection>
                        </Grid>

                        <Grid item xs={12} md={7}>
                            <StaggerContainer>
                                <Grid container spacing={2}>
                                    {whatYouGet.map((item, index) => (
                                        <Grid item xs={12} sm={6} key={index}>
                                            <StaggerItem>
                                                <Card
                                                    sx={{
                                                        p: 2,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 2,
                                                        height: '100%',
                                                    }}
                                                >
                                                    <CheckCircle sx={{ color: 'secondary.main', flexShrink: 0 }} />
                                                    <Typography variant="body2" fontWeight={500}>
                                                        {item}
                                                    </Typography>
                                                </Card>
                                            </StaggerItem>
                                        </Grid>
                                    ))}
                                </Grid>
                            </StaggerContainer>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* FAQs */}
            <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="md">
                    <AnimatedSection>
                        <Box sx={{ textAlign: 'center', mb: 6 }}>
                            <Typography
                                variant="overline"
                                sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 2 }}
                            >
                                Questions
                            </Typography>
                            <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
                                Frequently Asked Questions
                            </Typography>
                        </Box>
                    </AnimatedSection>

                    <AnimatedSection>
                        {faqs.map((faq, index) => (
                            <Accordion
                                key={index}
                                sx={{
                                    mb: 2,
                                    '&:before': { display: 'none' },
                                    boxShadow: '0 2px 8px rgba(11, 45, 91, 0.08)',
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                    sx={{
                                        '& .MuiAccordionSummary-content': { my: 2 },
                                    }}
                                >
                                    <Typography variant="h6" fontWeight={600}>
                                        {faq.q}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ pt: 0, pb: 3 }}>
                                    <Typography color="text.secondary">
                                        {faq.a}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </AnimatedSection>

                    <AnimatedSection delay={0.3}>
                        <Box sx={{ textAlign: 'center', mt: 6 }}>
                            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                                Have more questions? We're here to help.
                            </Typography>
                            <Button
                                component={RouterLink}
                                to="/contact"
                                variant="outlined"
                                color="primary"
                                size="large"
                            >
                                Contact Us
                            </Button>
                        </Box>
                    </AnimatedSection>
                </Container>
            </Box>
        </Box>
    );
};

export default WhatWeDo;
