import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ROUTES } from '../Router/routes-config';
import { ChakraProvider } from '@chakra-ui/react';

function Layout() {
    const token = sessionStorage.getItem('token');

    let unAuthenticatedRoutes = useRoutes([ROUTES[0]]);
    let authenticatedRoutes = useRoutes([ROUTES[1]]);

    // const element = !token ? authenticatedRoutes : unAuthenticatedRoutes;
    // return <ChakraProvider>{element}</ChakraProvider>;

    if (token) {
        return <ChakraProvider>{authenticatedRoutes}</ChakraProvider>;
    }
    return <ChakraProvider>{unAuthenticatedRoutes}</ChakraProvider>;
}

export default Layout;
