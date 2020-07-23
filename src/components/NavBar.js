import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
    return (
        <Navigation>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </Navigation>
    )
}