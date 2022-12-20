import React from 'react';
import {
    Container,
    Box,
    Image,
    Heading,
    FormControl,
    Input,
    FormLabel,
    FormHelperText,
    Button,
    useToast,
} from '@chakra-ui/react';
import logo from '../../../assets/images/logo.png';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { LoginPayload } from '@domain/auth';
import { loginUserAction } from '@store/actions/AuthenticationActions';
import { useAppDispatch } from '@store/useAppDispatch';

import { useNavigate } from 'react-router';
import { LOGIN_USER } from '@domain/constants';
import { useAppSelector } from '@store/useAppSelector';

function Login() {
    const navigate = useNavigate();
    const toast = useToast();
    const dispatch = useAppDispatch();
    const { isLoading, error, isAuthenticated } = useAppSelector((state) => state.Auth);

    const _handleSubmit = async (values: LoginPayload) => {
        const response = await dispatch(loginUserAction(values));

        if (response.type === `${LOGIN_USER}/rejected`) {
            toast({ status: 'error', description: response.payload as string, title: 'Login Error', position: 'top' });
        } else {
            toast({ status: 'success', description: 'Login Successful', title: 'Login Success', position: 'top' });
            navigate('/dashboard');
        }
    };

    const { handleChange, handleSubmit, values, errors } = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: yup.object().shape({
            username: yup.string().trim().required('Required'),
            password: yup.string().trim().required('Required'),
        }),
        onSubmit: _handleSubmit,
    });

    return (
        <Container centerContent className="loginContainer">
            <Box>{/* <Image src={logo} alt="tap logo" width={50} height={50} /> */}</Box>
            <Box width="80%">
                <Heading as="h2" size="lg" className="header">
                    Tools Manager
                </Heading>
                <Box className="form-box">
                    <form onSubmit={handleSubmit}>
                        <FormControl id="username">
                            <FormLabel>Username</FormLabel>
                            <Input
                                type="text"
                                className="form-input"
                                value={values.username}
                                onChange={handleChange('username')}
                            />
                            {<FormHelperText color="red.600">{errors.username}</FormHelperText>}
                        </FormControl>
                        <FormControl id="password" marginTop="3">
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                className="form-input"
                                value={values.password}
                                onChange={handleChange('password')}
                            />
                            <FormHelperText color="red.600">{errors.password}</FormHelperText>
                        </FormControl>
                        <Button
                            mt="4"
                            className="form-btn"
                            type="submit"
                            disabled={isLoading}
                            isLoading={isLoading}
                            loadingText="Loading..."
                        >
                            {isLoading ? 'Loading...' : 'Submit'}
                        </Button>
                    </form>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;
