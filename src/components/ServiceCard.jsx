import { Link as RouterLink } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import {
    AccountBalance,
    Psychology,
    Calculate,
    FactCheck,
    CheckCircle,
    ArrowForward,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const iconMap = {
    AccountBalance,
    Psychology,
    Calculate,
    FactCheck,
};

const ServiceCard = ({ service, variant = 'default' }) => {
    const IconComponent = iconMap[service.icon] || AccountBalance;

    const isCompact = variant === 'compact';
    const isDetailed = variant === 'detailed';

    return (
        <Card
            component={motion.div}
            whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(11, 45, 91, 0.15)',
            }}
            transition={{ duration: 0.3 }}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: `linear-gradient(90deg, ${service.color} 0%, #C9A227 100%)`,
                },
            }}
        >
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box
                    sx={{
                        display: 'inline-flex',
                        p: 1.5,
                        borderRadius: 2,
                        background: `linear-gradient(135deg, ${service.color}15 0%, ${service.color}08 100%)`,
                        mb: 2,
                    }}
                >
                    <IconComponent
                        sx={{
                            fontSize: isCompact ? 28 : 36,
                            color: service.color,
                        }}
                    />
                </Box>

                <Typography
                    variant={isCompact ? 'h6' : 'h5'}
                    component="h3"
                    fontWeight={600}
                    gutterBottom
                >
                    {service.title}
                </Typography>

                <Typography
                    color="text.secondary"
                    variant="body2"
                    sx={{ mb: isDetailed ? 2 : 0 }}
                >
                    {service.shortDescription}
                </Typography>

                {(isDetailed || !isCompact) && (
                    <List dense sx={{ mt: 2 }}>
                        {service.bullets.slice(0, isCompact ? 3 : 5).map((bullet, index) => (
                            <ListItem key={index} disablePadding sx={{ mb: 0.5 }}>
                                <ListItemIcon sx={{ minWidth: 28 }}>
                                    <CheckCircle sx={{ fontSize: 16, color: 'secondary.main' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={bullet}
                                    primaryTypographyProps={{
                                        variant: 'body2',
                                        color: 'text.secondary',
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>
                )}
            </CardContent>

            <CardActions sx={{ p: 3, pt: 0 }}>
                <Button
                    component={RouterLink}
                    to={`/services/${service.id}`}
                    endIcon={<ArrowForward />}
                    sx={{
                        color: service.color,
                        fontWeight: 600,
                        '&:hover': {
                            backgroundColor: `${service.color}08`,
                        },
                    }}
                >
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

export default ServiceCard;
