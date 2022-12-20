import React from 'react';
import { Box, FormControl, Input, FormLabel, FormHelperText, Button, Stack } from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as yup from 'yup';

export interface IName {
    name: string;
}
type CreateNameProps = {
    _handleSubmit: (value: IName) => void;
    type?: string;
    loading?: boolean;
};
const CreateName: React.VFC<CreateNameProps> = ({ _handleSubmit, type, loading }) => {
    const { handleChange, handleSubmit, values, errors } = useFormik({
        initialValues: {
            name: '',
        },
        validationSchema: yup.object().shape({
            name: yup.string().trim().required('Required'),
        }),
        onSubmit: _handleSubmit,
    });

    return (
        <Stack py="5">
            <form onSubmit={handleSubmit}>
                <FormControl id="username">
                    <FormLabel>{type}</FormLabel>
                    <Input
                        type="text"
                        placeholder="Name"
                        className="form-input"
                        value={values.name}
                        onChange={handleChange('name')}
                    />
                    {<FormHelperText color="red.600">{errors.name}</FormHelperText>}
                </FormControl>
                <Button
                    mt="2"
                    size="sm"
                    className="form-btn"
                    type="submit"
                    colorScheme="blue"
                    disabled={loading}
                    isLoading={loading}
                    loadingText="Loading..."
                >
                    Submit
                </Button>
            </form>
        </Stack>
    );
};

export default CreateName;
