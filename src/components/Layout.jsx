import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCallButton from './FloatingCallButton';

const Layout = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Navbar />

            <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>

            <FloatingCallButton />
            <Footer />
        </Box>
    );
};

export default Layout;
