import React from 'react'
import { Flex, Box, Heading, FormControl, Input, Button, Alert, FormErrorMessage } from "@chakra-ui/react";
import validationSchema from './validations';
import { fetchRegister } from '../../../../api';
import { useAuth } from '../../../Componentss/Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';



function Register() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            firstName: '',
            lastName: '',
        },
        validationSchema,
        onSubmit: async (values, bag) => {
            try {
                const registerResponse = await fetchRegister({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    password: values.password,
                });
                login(registerResponse);
                navigate("/profile")
                console.log(registerResponse);

            } catch (e) {
                bag.setErrors({ general: e.response.data.message });
            }
        },
    });

    return (
        <>
            <Flex className='register' direction={'column'} align="center" width="full" justifyContent="center">
                <Box pt={100}>
                    <Flex alignItems={'center'}>
                        <Box textAlign="center">
                            <Heading>Sign Up</Heading>
                        </Box>
                        <Link to='/signin'>
                            <Button className='btn text-primary'>Sign In</Button>
                        </Link>
                    </Flex>
                    <Box my={5} textAlign="left">
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl mt="15">
                                <Input
                                    className="form-control mt-2"
                                    id="firstName"
                                    name="firstName"
                                    placeholder='FirstName'
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.firstName}
                                />
                            </FormControl>
                            <FormControl>
                                <Input
                                    className="form-control mt-3"
                                    id="lastName"
                                    name="lastName"
                                    placeholder='LastName'
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.lastName}
                                />
                                <FormErrorMessage>test</FormErrorMessage>
                            </FormControl>
                            <Box my={5}>
                                {
                                    formik.errors.general && (
                                        <Alert status='error'>
                                            {formik.errors.general}
                                        </Alert>
                                    )
                                }
                            </Box>
                            <FormControl mt="15">
                                <Input
                                    className="form-control"
                                    id='email'
                                    placeholder='E-Mail'
                                    name='email'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    isInvalid={formik.touched.email && formik.errors.email}
                                />
                            </FormControl>
                            <FormControl mt="15">
                                <Input
                                    className="form-control"
                                    name='password'
                                    type='password'
                                    placeholder='Password'
                                    onChange={formik.handleChange("password")}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                            </FormControl>
                            <Button className='btn btn-outline-secondary w-100 ' mt="20" mb={80} width="full" type='submit'>
                                <span className='fs-5 text-danger'>Sign Up</span>
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </>
    )
}

export default Register