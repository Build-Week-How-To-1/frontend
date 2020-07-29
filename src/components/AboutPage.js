import React from 'react';
import styled from 'styled-components';

import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';

import Vincent from '../images/Vincent.jpeg';
import Angelica from '../images/Angelica.jpeg';
import Claudia from '../images/ClaudiaSol.jpeg';
import Kim from '../images/KimBoyd.png';
import Tony from '../images/TonySo.jpeg';
import Taylor from '../images/TaylorPalmer.jpg';



const AboutPage = () => {
    return (
        <div>
            <OurTeam>
                <h2>Our Team</h2>
                    <TeamMembers>
                        <Odd>
                            <img src={Vincent}></img>
                            <h3>Vincent Sanders</h3>
                            <p>Team Lead</p>
                            <a href='https://github.com/vincesanders'><AiFillGithub/></a>
                            <a href='https://www.linkedin.com/in/vincent-sanders/'><AiFillLinkedin/></a>
                        </Odd>
                        <Even>
                            <img src={Angelica}></img>
                            <h3>Angelica Perez</h3>
                            <p>UI Developer and FrontEnd Developer</p>
                            <a href='https://github.com/aperez9423'><AiFillGithub/></a>
                            <a href='https://www.linkedin.com/in/aperez9423/'><AiFillLinkedin/></a>
                        </Even>
                        <Odd>
                            <img src={Tony}></img>
                            <h3>Tony So</h3>
                            <p>FrontEnd Developer</p>
                            <a href='https://github.com/TonySo88'><AiFillGithub/></a>
                            <a><AiFillLinkedin/></a>
                        </Odd>
                        <Even>
                            <img src={Claudia}></img>
                            <h3>Claudia Sol</h3>
                            <p>FrontEnd Framework Developer</p>
                            <a href='https://github.com/cl-sol?tab=repositories'><AiFillGithub/></a>
                            <a href='https://www.linkedin.com/in/claudia-sol-0054741aa'><AiFillLinkedin/></a>
                        </Even>
                        <Odd>
                            <img src={Kim}></img>
                            <h3>Kim Boyd</h3>
                            <p>FrontEnd Framework Developer</p>
                            <a href='https://github.com/kimboyd12'><AiFillGithub/></a>
                            <a href='https://www.linkedin.com/in/kim-boyd/'><AiFillLinkedin/></a>
                        </Odd>
                        <Even>
                            <img src={Taylor}></img>
                            <h3>Taylor Palmer</h3>
                            <p>Backend Developer</p>
                            <a href='https://github.com/taylorpalmer'><AiFillGithub/></a>
                            <a><AiFillLinkedin/></a>
                        </Even>
                    </TeamMembers>
                </OurTeam>
        </div>
    )
}

export default AboutPage;


const OurTeam = styled.div `  
    h2 {
        text-align: center;
        font-size: 2rem;
        font-weight: bolder;
    }

    h3 {
        margin-bottom: 0rem;
        text-align: center;
        font-size: 1.5rem;
        font-weight: bolder;
    }

    p {
        font-size: 1.2rem;
    }
`

const TeamMembers = styled.div `
    display: flex;
    flex-direction: column;
`

const Odd = styled.section `
    border-radius: 5.5rem 0rem 5.5rem 0rem;
    border: .3rem solid gray;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;

    img {
        height: 10rem;
        width: 10rem;
        margin-top: 1rem;
        border: .3rem solid orange;
        border-radius: 10rem;
    }

    a {
        color: black;
        font-size: 2.5rem;

        &:hover { 
            color: orange;
        }
    }
`
const Even = styled.section `
    border-radius: 0rem 5.5rem 0rem 5.5rem;
    border: .3rem solid gray;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;

    img {
        height: 10rem;
        width: 10rem;
        margin-top: 1rem;
        border: .3rem solid orange;
        border-radius: 10rem;
    }

    a {
        color: black;
        font-size: 2.5rem;

        &:hover { 
            color: orange;
        }
    }
`