import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from '@chakra-ui/layout';
import { SubMenuProps } from '@domain/layout';
import { useState } from 'react';

const SubMenu: React.FC<SubMenuProps> = ({ item }) => {
    const [showSubNav, setShowSubNav] = useState<boolean>(false);

    const handleShowOptions = () => {
        if (item.children) setShowSubNav(!showSubNav);
    };

    return (
        <>
            <NavLink to={item.path} onClick={handleShowOptions}>
                <Box className="submenu">
                    {item.icon}
                    <Box className="title">{item.title}</Box>
                    {item.iconClosed}
                </Box>
            </NavLink>
            {showSubNav &&
                item.children &&
                item.children.map((child, index) => {
                    return (
                        <NavLink to={child.path} key={index}>
                            <Box className="submenu sub-submenu">
                                {child.icon}
                                <Box className="title">{child.title}</Box>
                            </Box>
                        </NavLink>
                    );
                })}
        </>
    );
};

export default SubMenu;
