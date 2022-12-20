import React, { useState } from 'react';
import {
    Button,
    ButtonGroup,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverArrow,
    PopoverCloseButton,
    PopoverBody,
    PopoverFooter,
    IconButton,
} from '@chakra-ui/react';
import { RiDeleteBinFill } from 'react-icons/ri';

function DeletePopover() {
    const [isOpen, setIsOpen] = React.useState(false);
    const open = () => setIsOpen(!isOpen);
    const close = () => setIsOpen(false);
    return (
        <Popover returnFocusOnClose={false} isOpen={isOpen} onClose={close} placement="right" closeOnBlur={false}>
            <PopoverTrigger>
                <IconButton size="sm" icon={<RiDeleteBinFill />} onClick={open} aria-label="delete entry" />
            </PopoverTrigger>

            <PopoverContent>
                <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>Are you sure you want to delete this entry?</PopoverBody>
                <PopoverFooter d="flex" justifyContent="flex-end">
                    <ButtonGroup size="sm">
                        <Button variant="outline" onClick={close}>
                            Cancel
                        </Button>
                        <Button colorScheme="red">Delete</Button>
                    </ButtonGroup>
                </PopoverFooter>
            </PopoverContent>
        </Popover>
    );
}

export default DeletePopover;
