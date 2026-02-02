import { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Alert,
    Stack,
} from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import company from '../config/company';

const ContactForm = ({ subject = 'Website Inquiry', service = '' }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone is required';
        } else if (!/^[\d\s\-+()]+$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const emailSubject = service
            ? `${subject}: ${service} Service Inquiry`
            : subject;

        const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
${service ? `Service: ${service}` : ''}

Message:
${formData.message}
    `.trim();

        const mailtoLink = `mailto:${company.contact.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;
        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
        }, 5000);
    };

    return (
        <Box
            component={motion.form}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            noValidate
        >
            {submitted && (
                <Alert severity="success" sx={{ mb: 3 }}>
                    Your email client should open with the message. If not, please email us directly at {company.contact.email}
                </Alert>
            )}

            <Stack spacing={3}>
                <TextField
                    fullWidth
                    name="name"
                    label="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    required
                    variant="outlined"
                />

                <TextField
                    fullWidth
                    name="email"
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                    variant="outlined"
                />

                <TextField
                    fullWidth
                    name="phone"
                    label="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    error={!!errors.phone}
                    helperText={errors.phone}
                    required
                    variant="outlined"
                />

                <TextField
                    fullWidth
                    name="message"
                    label="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    required
                    multiline
                    rows={4}
                    variant="outlined"
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<SendIcon />}
                    component={motion.button}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    sx={{ py: 1.5 }}
                >
                    Send Message
                </Button>
            </Stack>
        </Box>
    );
};

export default ContactForm;
