import React from 'react';
import {
    Flex,
    Box,
    Heading,
    Spacer,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image,
    MenuDivider,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { getUserProfileInfo } from '@domain/utilities';
import { logoutUserAction } from '@store/actions/AuthenticationActions';

function Navbar() {
    const _handleLogout = () => logoutUserAction();
    return (
        <Flex className="navbar">
            <Box p="2">
                <Heading size="md" color="#fff">
                    TAP Tools Manager
                </Heading>
            </Box>
            <Spacer />
            <Box>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Profile
                    </MenuButton>
                    <MenuList>
                        <MenuItem px="4">
                            <Image
                                boxSize="2rem"
                                borderRadius="full"
                                src="https://placekitten.com/100/100"
                                alt="Fluffybuns the destroyer"
                                mr="12px"
                            />
                            <span> {getUserProfileInfo()?.fullname} </span>
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem>My Account</MenuItem>
                        <MenuItem onClick={_handleLogout}>Logout</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    );
}

export default Navbar;
