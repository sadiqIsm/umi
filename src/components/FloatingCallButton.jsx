import { Fab, Tooltip, Zoom } from '@mui/material';
import { Phone as PhoneIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import company from '../config/company';

const FloatingCallButton = () => {
    const phoneNumber = company.contact.primaryPhone;

    return (
        <Zoom in={true} timeout={500}>
            <Tooltip title="Call Now" placement="left" arrow>
                <Fab
                    component={motion.a}
                    href={`tel:${phoneNumber}`}
                    color="secondary"
                    aria-label="Call now"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    sx={{
                        position: 'fixed',
                        bottom: { xs: 20, md: 32 },
                        right: { xs: 20, md: 32 },
                        zIndex: 1200,
                        boxShadow: '0 8px 24px rgba(201, 162, 39, 0.4)',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            inset: -4,
                            borderRadius: '50%',
                            border: '2px solid',
                            borderColor: 'secondary.main',
                            animation: 'pulse 2s infinite',
                        },
                        '@keyframes pulse': {
                            '0%': {
                                transform: 'scale(1)',
                                opacity: 1,
                            },
                            '50%': {
                                transform: 'scale(1.15)',
                                opacity: 0.5,
                            },
                            '100%': {
                                transform: 'scale(1.3)',
                                opacity: 0,
                            },
                        },
                    }}
                >
                    <PhoneIcon />
                </Fab>
            </Tooltip>
        </Zoom>
    );
};

export default FloatingCallButton;
