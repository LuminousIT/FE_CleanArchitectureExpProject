import React, { useState } from 'react';
import { Box, Button, Stack, useToast, IconButton } from '@chakra-ui/react';
import { MdBuild, MdCall } from 'react-icons/md';
import { GrAdd } from 'react-icons/gr';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBinFill, RiEditFill } from 'react-icons/ri';
import moment from 'moment';
import CreateName, { IName } from '../components/CreateName';
import CoreUIDataTable from 'src/application/DataTable/CoreUIDataTable';
import { CardExtraInfoProp } from '@domain/card-setup';
import { useEffect } from 'react';
import { useAppDispatch } from '@store/useAppDispatch';
import { cardTypeAction, createCardTypeAction } from '@store/actions/CardSetupActions';
import { useAppSelector } from '@store/useAppSelector';
import { CREATE_CARD_TYPE } from '@domain/constants';
import DeletePopover from '@GlobalComponents/DeletePopover';
import EditPopover from '@GlobalComponents/EditPopover';

const userData: CardExtraInfoProp[] = [
    {
        id: 1,
        name: 'Wrist band',
        dateCreated: '2021-08-26T23:46:45.000000Z',
        dateUpdated: '2021-08-26T23:46:45.000000Z',
    },
    {
        id: 2,
        name: 'Watch ',
        dateCreated: '2021-08-26T23:46:45.000000Z',
        dateUpdated: '2021-08-26T23:46:45.000000Z',
    },
];

const fields = [
    { key: 'SN', _style: { width: '10%', background: '#2d75b6', color: '#fff' } },
    { key: 'name', _style: { width: '40%', background: '#2d75b6', color: '#fff' } },
    { key: 'dateCreated', _style: { width: '20%', background: '#2d75b6', color: '#fff' } },
    { key: 'actions', _style: { width: '30%', background: '#2d75b6', color: '#fff' } },
];

function CardsType() {
    const dispatch = useAppDispatch();
    const { cardType, isLoading, error } = useAppSelector((state) => state.CardSetup);
    const [showCreate, setShowCreate] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const toast = useToast();

    const _showCreate = () => setShowCreate(!showCreate);

    const _handleSubmit = async (value: IName) => {
        setLoading(true);
        const response = await dispatch(createCardTypeAction(value));
        setLoading(false);
        if (response.type === `${CREATE_CARD_TYPE}/rejected`) {
            toast({ status: 'error', description: response.payload as string, title: ' Error', position: 'top' });
        } else {
            toast({
                status: 'success',
                description: 'Successful',
                title: 'Creation Successful',
                position: 'top',
            });
        }
    };

    const _handleEdit = () => {};
    useEffect(() => {
        dispatch(cardTypeAction());
    }, []);

    const actions = {
        SN: (item: CardExtraInfoProp, index: number) => (
            <td>
                <p>{index + 1}</p>
            </td>
        ),
        dateCreated: (item: CardExtraInfoProp) => (
            <td>
                {' '}
                <p> {moment(item.dateCreated).format('Do MMMM, YYYY')} </p>
            </td>
        ),
        actions: (item: CardExtraInfoProp, index: number) => (
            <td>
                <Stack spacing="10" direction="row">
                    {/* <AiFillEdit cursor="pointer" /> */}
                    {/* <RiDeleteBinFill cursor="pointer" /> */}
                    <IconButton size="sm" icon={<RiEditFill />} aria-label="edit entry" onClick={_handleEdit} />
                    <DeletePopover />
                </Stack>
            </td>
        ),
    };

    return (
        <Box py="5">
            <Box>
                <Button
                    size="sm"
                    rightIcon={<GrAdd />}
                    onClick={_showCreate}
                    colorScheme="blue"
                    variant="outline"
                    alignSelf="flex-end"
                    isLoading={loading}
                >
                    Create
                </Button>

                {showCreate && <CreateName _handleSubmit={_handleSubmit} type="Cards Type" loading={loading} />}
            </Box>

            <Box py="5">
                <CoreUIDataTable data={cardType} fields={fields} actions={actions} loading={isLoading} />
            </Box>
        </Box>
    );
}

export default CardsType;
