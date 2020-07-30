import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import axios from 'axios';
import Logo from '../images/HowToLogo.jpg'

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

    const [buttonDisabled, setButtonDisabled] =useState(true);

    useEffect(() => {
        formSchema.isValid(formState)
            .then(valid => {
                setButtonDisabled(!valid);
        });
    }, [formState]);

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
        <FormContainer> 
            <img src={Logo} alt='HowToLogo'/>
            <h1>Feeling Crafty?</h1>
            <p>Lots of crafting projects, home improvement ideas, woodworking builds, and so much more. What are you waiting for? Sign up today! </p>
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
                    <button id="submit" disabled={buttonDisabled}>Register</button>
            </form>
        </FormContainer> 
    );
};
    
export default SignUpForm;

const FormContainer = styled.div`
    background-color: lightgray;
    border: .3rem solid gray;
    height: 75vh;
    width: 85vw;
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 3vw;
    margin-bottom: 3vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        height: 5rem;
        border: .2rem solid orange;
        margin: 1rem;

        @media (max-width: 550px) {
            height: 4rem;
        }
    }

    p {
        text-align: center;
        padding-left: 3rem;
        padding-right: 3rem;
    }

    h1 {
        @media (max-width: 550px) {
            font-size: 1.7rem;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        label {
            font-size: 1.2rem;
            padding-bottom: 1rem;
            padding-top: .5rem;
        }

        input {
            height: .7rem;
            width: 20rem;
            padding-bottom: 1rem;
            outline: none;
            border: .1rem solid orange;
        }

        button {
            height: 2rem;
            width: 6rem;
            border-radius: 1rem;
            border: .1rem solid black;
            background-color: gray;
            font-weight: bolder;
            font-size: 1rem;
            margin: 1rem;
        }
    }
`
