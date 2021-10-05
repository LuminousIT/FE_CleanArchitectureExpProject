import React from 'react';
import Navbar from '@GlobalComponents/Navbar';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Box } from '@chakra-ui/react';
import { useState } from 'react';

function MainLayout() {
    const [responsiveMainLayoutPos, setResponsiveMainLayoutPos] = useState<string>('250');

    const handleMainLayout = (val: string) => {
        setResponsiveMainLayoutPos(val);
    };
    return (
        <Box>
            <Navbar />
            <Sidebar handleMainLayoutRespMargin={handleMainLayout} />
            <Box marginLeft={responsiveMainLayoutPos}>
                <Outlet />
            </Box>
        </Box>
    );
}

export default MainLayout;
