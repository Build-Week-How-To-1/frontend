import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const formSchema = yup.object().shape({
    email: yup.string().required('Email is a required field.').email('Must be a valid email address.'),
    password: yup.string().required('A password is required.').min(8, 'Password selected is too short.'),
});

const SignUpForm = () => {
    const [formState, setFormState] = useState([
        {
            email: '',
            password: '',
        },
    ]);

    const [errorState, setErrorState] = useState({
        email: '',
        password: '',
    });

    const validateChange = e => {
        yup 
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then((valid) => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: '',
                });
            })
            .catch((err) => {
                console.log(err.errors);
                setErrorState({
                    ...errorState,
                    [e.target.name]: err.errors[0],
                });
            });
    };

    const handleChange = e => {
        e.persist();
        validateChange(e);
        setFormState({
            ...formState, 
            [e.target.name] : e.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formState);
        axios
            .post('https://reqres.in/api/users', formState)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>
                Email: 
            </label>
            <input
                id='email'
                type='text'
                name='email'
                value={formState.email}
                onChange={handleChange}/>
        {errorState.email.length > 0 ? <p>{errorState.email}</p> : null}
        <label htmlFor="password">Password: </label>
        <input
            id='password'
            type='password'
            name='password'
            value={formState.password}
            onChange={handleChange}/>
            {errorState.password.length > 0 ? <p>{errorState.password}</p> : null}
            <button>Register</button>
        </form>
    );
};
    
export default SignUpForm;
