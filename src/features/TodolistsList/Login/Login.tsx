import React from 'react'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginTC } from './auth-reducer';



export const Login = () => {
    const dispath= useDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {// проверка email
                errors.email = 'Invalid email address';
            } if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 2) {
                errors.password = 'Invalid password';
            }
            return errors;
        },

        onSubmit: values => {
            dispath(loginTC(values))
            alert(JSON.stringify(values));
            formik.resetForm();
        },
    })

    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormLabel>
                        <p>To log in get registered
                            <a href={'https://social-network.samuraijs.com/'}
                                target={'_blank'}> here
                            </a>
                        </p>
                        <p>or use common test account credentials:</p>
                        <p>Email: free@samuraijs.com</p>
                        <p>Password: free</p>
                    </FormLabel>
                    <FormGroup>
                        <TextField label="Email"
                            margin="normal"
                            // name='email'
                            // value= {formik.values.email}
                            // onBlur={formik.handleBlur}
                            // onChange={formik.handleChange} //взамен :
                            {...formik.getFieldProps('email')}


                        />
                        {formik.touched.email && formik.errors.email ? <div style={{ color: 'red' }}>{formik.errors.email}</div> : null}

                        <TextField type="password"
                            label="Password"
                            margin="normal"
                            //   name='password'
                            // onChange={formik.handleChange}
                            // value= {formik.values.password}
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password && <div style={{ color: 'red' }}>{formik.errors.password}</div>}

                        <FormControlLabel label={'Remember me'}
                            control={<Checkbox  {...formik.getFieldProps('rememberMe')}
                            // name='rememberMe'
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // checked= {formik.values.rememberMe}              
                            />} />
                        <Button type={'submit'} variant={'contained'} color={'primary'}>
                            Login
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}