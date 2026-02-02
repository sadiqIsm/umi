import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Box } from '@mui/material';

const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

const fadeInLeft = {
    hidden: {
        opacity: 0,
        x: -40,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

const fadeInRight = {
    hidden: {
        opacity: 0,
        x: 40,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

export const variants = {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    staggerContainer,
    scaleIn,
};

const AnimatedSection = ({
    children,
    variant = 'fadeInUp',
    delay = 0,
    threshold = 0.1,
    once = true,
    style = {},
    ...props
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const selectedVariant = variants[variant] || fadeInUp;

    return (
        <Box
            component={motion.div}
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
                hidden: selectedVariant.hidden,
                visible: {
                    ...selectedVariant.visible,
                    transition: {
                        ...selectedVariant.visible.transition,
                        delay,
                    },
                },
            }}
            style={style}
            {...props}
        >
            {children}
        </Box>
    );
};

export const StaggerContainer = ({
    children,
    threshold = 0.1,
    once = true,
    ...props
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    return (
        <Box
            component={motion.div}
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            {...props}
        >
            {children}
        </Box>
    );
};

export const StaggerItem = ({ children, variant = 'fadeInUp', ...props }) => {
    const selectedVariant = variants[variant] || fadeInUp;

    return (
        <Box component={motion.div} variants={selectedVariant} {...props}>
            {children}
        </Box>
    );
};

export default AnimatedSection;
