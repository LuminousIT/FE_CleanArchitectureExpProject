import React from 'react';
import Navbar from '@GlobalComponents/Navbar';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

function AuthenticationLayout() {
    return (
        <Box height="100%" display="flex" justifyContent="center" alignItems="center">
            {/* <Navbar /> */}
            {/* <h1>Auth Layout</h1> */}
            <Outlet />
        </Box>
    );
}

export default AuthenticationLayout;
