import React from 'react';
import { Container } from '@chakra-ui/react';

function PageContainer({ children }: { children: React.ReactNode }) {
    return (
        <Container maxW="container.xl" padding="5" overflow="scroll">
            {children}
        </Container>
    );
}

export default PageContainer;
