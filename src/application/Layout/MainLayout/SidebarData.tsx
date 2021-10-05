import React from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { AiOutlineHome } from 'react-icons/ai';
import { FiCreditCard, FiActivity } from 'react-icons/fi';
import { BiDevices } from 'react-icons/bi';
import { MdSync, MdBlock } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';
import { SidebarMenuProps } from '@domain/layout';

export const SidebarData: SidebarMenuProps[] = [
    {
        title: 'Dashboard',
        path: 'dashboard',
        icon: <AiOutlineHome />,
        iconOpen: <ChevronDownIcon />,
        children: null,
    },
    {
        title: 'Cards Manager',
        path: '',
        icon: <FiCreditCard />,
        iconClosed: <ChevronRightIcon />,
        iconOpen: <ChevronDownIcon />,
        children: [
            {
                title: 'Card Setup',
                path: '/cards/card-setup',
                icon: <FiCreditCard />,
            },
            {
                title: 'Cards',
                path: '/cards/',
                icon: <FiCreditCard />,
            },
            {
                title: 'Blocked Cards',
                path: '/cards/blocked-cards',
                icon: <MdBlock />,
            },
        ],
    },
    {
        title: 'Devices',
        path: 'devices',
        icon: <BiDevices />,
        iconOpen: <ChevronDownIcon />,
        children: null,
    },
    {
        title: 'Syncher',
        path: 'syncher',
        icon: <MdSync />,
        iconOpen: <ChevronDownIcon />,
        children: null,
    },
    {
        title: 'Activity Log',
        path: 'activity-log',
        icon: <FiActivity />,
        iconOpen: <ChevronDownIcon />,
        children: null,
    },
    {
        title: 'Admin',
        path: 'admin',
        icon: <RiAdminLine />,
        iconOpen: <ChevronDownIcon />,
        children: null,
    },
];
