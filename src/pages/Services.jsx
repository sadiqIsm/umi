import { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Chip,
    Stack,
} from '@mui/material';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import ServiceCard from '../components/ServiceCard';
import company from '../config/company';

const filterCategories = [
    { label: 'All', value: 'all' },
    { label: 'Compliance', value: 'compliance' },
    { label: 'Advisory', value: 'advisory' },
    { label: 'Reporting', value: 'reporting' },
    { label: 'Audit', value: 'audit' },
];

const serviceCategories = {
    taxation: ['compliance', 'advisory', 'reporting'],
    consulting: ['advisory'],
    accounting: ['compliance', 'reporting'],
    auditing: ['audit', 'compliance'],
};

const Services = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const services = Object.values(company.services);

    const filteredServices = activeFilter === 'all'
        ? services
        : services.filter((service) =>
            serviceCategories[service.id]?.includes(activeFilter)
        );

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
                                Professional Services
                            </Typography>
                            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mt: 1, mb: 3 }}>
                                Our Services
                            </Typography>
                            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 400 }}>
                                Comprehensive tax, accounting, consulting, and auditing services
                                tailored to help Nigerian businesses thrive while staying compliant.
                            </Typography>
                        </Box>
                    </AnimatedSection>
                </Container>
            </Box>

            {/* Services Grid */}
            <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    {/* Filter Chips */}
                    <AnimatedSection>
                        <Box sx={{ mb: 6 }}>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                Filter by category:
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                {filterCategories.map((category) => (
                                    <Chip
                                        key={category.value}
                                        label={category.label}
                                        onClick={() => setActiveFilter(category.value)}
                                        variant={activeFilter === category.value ? 'filled' : 'outlined'}
                                        color={activeFilter === category.value ? 'primary' : 'default'}
                                        sx={{
                                            mb: 1,
                                            transition: 'all 0.2s',
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                            },
                                        }}
                                    />
                                ))}
                            </Stack>
                        </Box>
                    </AnimatedSection>

                    {/* Services */}
                    <StaggerContainer>
                        <Grid container spacing={4}>
                            {filteredServices.map((service) => (
                                <Grid item xs={12} sm={6} md={6} key={service.id}>
                                    <StaggerItem>
                                        <ServiceCard service={service} variant="detailed" />
                                    </StaggerItem>
                                </Grid>
                            ))}
                        </Grid>
                    </StaggerContainer>

                    {filteredServices.length === 0 && (
                        <AnimatedSection>
                            <Box sx={{ textAlign: 'center', py: 8 }}>
                                <Typography variant="h6" color="text.secondary">
                                    No services match the selected filter.
                                </Typography>
                            </Box>
                        </AnimatedSection>
                    )}
                </Container>
            </Box>
        </Box>
    );
};

export default Services;
