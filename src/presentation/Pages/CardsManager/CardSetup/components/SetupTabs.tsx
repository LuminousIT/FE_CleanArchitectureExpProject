import React from 'react';
import { Box } from '@chakra-ui/layout';
import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import CardsType from '../CardType';

function SetupTabs() {
    return (
        <Box>
            <Tabs isFitted variant="unstyled">
                <TabList>
                    <Tab className="tab" _selected={{ color: 'white', bg: 'blue.500', fontWeight: 'bold' }}>
                        Card Type
                    </Tab>
                    <Tab className="tab" _selected={{ color: 'white', bg: 'blue.500', fontWeight: 'bold' }}>
                        Card Form
                    </Tab>
                    <Tab className="tab" _selected={{ color: 'white', bg: 'blue.500', fontWeight: 'bold' }}>
                        Card Size
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel p="0px">
                        <CardsType />
                    </TabPanel>
                    <TabPanel>
                        <p>Card form!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Card size!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
}

export default SetupTabs;
