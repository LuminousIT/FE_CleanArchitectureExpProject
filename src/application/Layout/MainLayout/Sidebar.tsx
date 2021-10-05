import React from 'react';
import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { SidebarProps } from '@domain/layout';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

const Sidebar: React.FC<SidebarProps> = ({ handleMainLayoutRespMargin }) => {
    useEffect(() => {
        const sidebar = document.getElementById('sidebar');
        window.addEventListener('resize', (event) => {
            const screenWidthSize = window.screen.width;
            if (screenWidthSize < 800) {
                if (sidebar) {
                    sidebar.style.left = '-300';
                    handleMainLayoutRespMargin('0');
                }
            } else {
                if (sidebar) {
                    sidebar.style.left = '0';
                    handleMainLayoutRespMargin('250');
                }
            }
        });

        return () => {
            window.removeEventListener('resize', () => {
                console.log('listener removed');
            });
        };
    }, []);
    return (
        <Box>
            <Box id="sidebar" className="sidebar">
                {SidebarData.map((item, index) => {
                    return <SubMenu item={item} key={index} />;
                })}
            </Box>
        </Box>
    );
};

export default Sidebar;
