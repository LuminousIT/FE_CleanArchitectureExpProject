import React, { useState, Suspense } from 'react';
import Navbar from '@GlobalComponents/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Box, Heading } from '@chakra-ui/react';

function MainLayout() {
    const { pathname } = useLocation();

    const _getCurrentPage = (path: string) => {
        let page = '';
        const loc = path.split('/');
        const currentPage = loc[loc.length - 1];

        if (currentPage == '') return 'Dashboard';

        if (currentPage) page = currentPage.split('').includes('-') ? currentPage.split('-').join(' ') : currentPage;

        return page.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
    };

    const [responsiveMainLayoutPos, setResponsiveMainLayoutPos] = useState<string>('250');

    const handleMainLayout = (val: string) => {
        setResponsiveMainLayoutPos(val);
    };
    return (
        <Box>
            <Navbar />
            <Sidebar handleMainLayoutRespMargin={handleMainLayout} />
            <Box marginLeft={responsiveMainLayoutPos}>
                <Box px="5" py="2">
                    <Heading color="#ec7c30"> {_getCurrentPage(pathname)} </Heading>
                </Box>
                <Suspense fallback={<div>loading...</div>}>
                    <Outlet />
                </Suspense>
            </Box>
        </Box>
    );
}

export default MainLayout;
