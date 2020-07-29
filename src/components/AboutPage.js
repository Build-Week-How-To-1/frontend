import React from 'react';
import styled from 'styled-components';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';


const AboutPage = () => {
    return (
        <div>
            <OurTeam>
                <h2>Our Team</h2>
                    <TeamMembers>
                        <section>
                            <img></img>
                            <h3>Vincent Sanders</h3>
                            <p>Team Lead</p>
                            <a><AiFillGithub/></a>
                            <a><AiFillLinkedin/></a>
                        </section>
                        <section>
                            <img></img>
                            <h3>Angelica Perez</h3>
                            <p>UI Developer and FrontEnd Developer</p>
                            <a href='https://github.com/aperez9423'><AiFillGithub/></a>
                            <a href='https://www.linkedin.com/in/aperez9423/'><AiFillLinkedin/></a>
                        </section>
                        <section>
                            <img></img>
                            <h3>Tony So</h3>
                            <p>FrontEnd Developer</p>
                            <a><AiFillGithub/></a>
                            <a><AiFillLinkedin/></a>
                        </section>
                        <section>
                            <img></img>
                            <h3>Claudia Sol</h3>
                            <p>FrontEnd Framework Developer</p>
                            <a><AiFillGithub/></a>
                            <a><AiFillLinkedin/></a>
                        </section>
                        <section>
                            <img></img>
                            <h3>Kim Boyd</h3>
                            <p>FrontEnd Framework Developer</p>
                            <a><AiFillGithub/></a>
                            <a><AiFillLinkedin/></a>
                        </section>
                        <section>
                            <img></img>
                            <h3>Taylor Palmer</h3>
                            <p>Backend Developer</p>
                            <a><AiFillGithub/></a>
                            <a><AiFillLinkedin/></a>
                        </section>
                    </TeamMembers>
                </OurTeam>
        </div>
    )
}

export default AboutPage;


const OurTeam = styled.div `
    
`

const TeamMembers = styled.div `
    width: 40vw;

    section {
        width: 40vw;
        border: .3rem solid gray;
        background-color: lightgray;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
    }

    a {
        color: black;

        &:hover { 
            color: orange;
        }
    }
`

  