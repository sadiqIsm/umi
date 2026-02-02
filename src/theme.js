import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0B2D5B',
            light: '#1a4a8f',
            dark: '#071d3a',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#C9A227',
            light: '#d4b54d',
            dark: '#9a7c1d',
            contrastText: '#000000',
        },
        accent: {
            main: '#1F5AA6',
            light: '#3d7bc7',
            dark: '#164075',
        },
        background: {
            default: '#FFFFFF',
            paper: '#FFFFFF',
            subtle: '#F8FAFC',
        },
        text: {
            primary: '#0B2D5B',
            secondary: '#6B7280',
            muted: '#9CA3AF',
        },
        grey: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
        },
        divider: 'rgba(11, 45, 91, 0.12)',
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '3.5rem',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
        },
        h3: {
            fontWeight: 600,
            fontSize: '2rem',
            lineHeight: 1.4,
        },
        h4: {
            fontWeight: 600,
            fontSize: '1.5rem',
            lineHeight: 1.4,
        },
        h5: {
            fontWeight: 600,
            fontSize: '1.25rem',
            lineHeight: 1.5,
        },
        h6: {
            fontWeight: 600,
            fontSize: '1rem',
            lineHeight: 1.5,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.7,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.6,
        },
        button: {
            fontWeight: 600,
            textTransform: 'none',
            letterSpacing: '0.02em',
        },
    },
    shape: {
        borderRadius: 12,
    },
    shadows: [
        'none',
        '0px 1px 2px rgba(11, 45, 91, 0.05)',
        '0px 1px 3px rgba(11, 45, 91, 0.1), 0px 1px 2px rgba(11, 45, 91, 0.06)',
        '0px 4px 6px -1px rgba(11, 45, 91, 0.1), 0px 2px 4px -1px rgba(11, 45, 91, 0.06)',
        '0px 10px 15px -3px rgba(11, 45, 91, 0.1), 0px 4px 6px -2px rgba(11, 45, 91, 0.05)',
        '0px 20px 25px -5px rgba(11, 45, 91, 0.1), 0px 10px 10px -5px rgba(11, 45, 91, 0.04)',
        '0px 25px 50px -12px rgba(11, 45, 91, 0.25)',
        ...Array(18).fill('0px 25px 50px -12px rgba(11, 45, 91, 0.25)'),
    ],
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '10px 24px',
                    fontSize: '0.95rem',
                },
                contained: {
                    boxShadow: '0px 4px 14px rgba(11, 45, 91, 0.25)',
                    '&:hover': {
                        boxShadow: '0px 6px 20px rgba(11, 45, 91, 0.35)',
                    },
                },
                containedSecondary: {
                    boxShadow: '0px 4px 14px rgba(201, 162, 39, 0.25)',
                    '&:hover': {
                        boxShadow: '0px 6px 20px rgba(201, 162, 39, 0.35)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: '0px 4px 20px rgba(11, 45, 91, 0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        boxShadow: '0px 8px 30px rgba(11, 45, 91, 0.12)',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingLeft: 24,
                    paddingRight: 24,
                    '@media (min-width: 600px)': {
                        paddingLeft: 32,
                        paddingRight: 32,
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    fontWeight: 500,
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    '&:before': {
                        display: 'none',
                    },
                    '&.Mui-expanded': {
                        margin: 0,
                    },
                },
            },
        },
    },
});

export default theme;
