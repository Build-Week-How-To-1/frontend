import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../images/HowToLogo.jpg';

import SearchForm from "./SearchForm";

const NavBar = () => {
    return (
        <Navigation>
            <img src={Logo} alt='HowToLogo'/>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            {/* <form className="search-form" onSubmit={getSearch}>
                <input className="search-bar"
                    type='text' 
                    placeholder='Search...' 
                    value={search}
                    onChange={updateSearch}
                />
                <button className="search-button" type='submit'>Submit</button>
            </form> */}
            <SearchForm />
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </Navigation>
    )
}

export default NavBar;



const Navigation = styled.div`
    border-bottom: .1rem dashed gray;
    display:flex;
    justify-content: space-evenly;
    a {
        text-decoration: none;
        color: black;
        padding: 1rem;
        font-weight: bold;

        &:hover {
            color: gray;
        }
    } 
    img {
        height: 4rem;
        width: 10rem;
    }
    form {
        display: flex;
        height: 1.8rem;
        align-items: center;
        justify-content: center;
        padding-top: .7rem;
    }
    input {
         border: .1rem solid orange;
         outline: none;
    }
    button{
        border: .1rem solid black;
        background-color: white;
        &:hover {
            border: .1rem solid gray;
            background-color: white;
        }
    }


`