import React from "react";
import styled from "styled-components";
import Tools from "../images/Tools.jpg";

const HomePage = () => {
  return (
    <div>
      <HomePageBanner>
        <h2>
          Welcome to How To: Share Your DIY, the most trusted DIY sharing
          platform on the internet.
        </h2>
        <img src={Tools} alt="Woodworking Tools"></img>
      </HomePageBanner>
      <Home>
        <Categories>
          <h4>Browse by Catergory:</h4>
          <button>Arts and Entertainment</button>
          <button>Cars</button>
          <button>Computers and Electronics</button>
          <button>Finance and Business</button>
          <button>Food and Entertaining</button>
          <button>Health</button>
          <button>Hobbies and Crafts</button>
          <button>Holidays and Traditions</button>
          <button>Home and Garden</button>
          <button>Personal Care and Style</button>
          <button>Sports and Fitness</button>
          <button>Travel</button>
        </Categories>
        <Content>
          <Sharing>
            <h3>Have a DIY to share?</h3>
            <button>Share Your DIY!</button>
          </Sharing>
          <Featured>
            <h4>Featured How Tos:</h4>
          </Featured>
        </Content>
      </Home>
    </div>
  );
};

export default HomePage;

const HomePageBanner = styled.div`
  margin-top: 1rem;
  background: lightgray;
  height: 15rem;
  border-top: 0.2rem solid gray;
  border-bottom: 0.2rem solid gray;
  display: flex;
  align-items: center;
  font-size: 1.2rem;

  @media (max-width: 700px) {
    font-size: 1rem;
    flex-direction: column;
    height: 30rem;
  }

  img {
    height: 100%;

    @media (max-width: 700px) {
      height: 60%;
    }
    @media (max-width: 550px) {
      height: 50%;
    }
  }

  h2 {
    color: black;
    text-align: center;
    width: 60%;
    padding: 1rem;
  }
`;

const Home = styled.div`
  display: flex;

  @media (max-width: 700px) {
    width: 100vw;
    display: block;
  }
`;

const Categories = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;

  h4 {
    width: 100vw;
    margin-left: 1.5rem;
  }

  @media (max-width: 700px) {
    width: 100vw;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  button {
    border: 0.1rem solid orange;
    background-color: white;
    border-radius: 0.3rem;
    font-size: 0.8rem;

    @media (max-width: 700px) {
      width: 45vw;
      font-size: 1rem;
    }

    @media (max-width: 500px) {
      width: 90vw;
      font-size: 1rem;
    }

    &:hover {
      color: orange;
      border: 0.1rem solid black;
    }
  }
`;

const Sharing = styled.div`
  height: 20vh;
  width: 75vw;
  margin: 1rem;
  border-top: 0.2rem solid orange;
  border-bottom: 0.2rem solid orange;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    width: 95vw;
    margin-top: 1rem;
  }

  button {
    background-color: lightgray;
    border: 0.1rem solid black;
    border-radius: 0.3rem;
    font-size: 0.8rem;
    font-weight: bolder;
    height: 2rem;
    width: 10rem;
  }
`;

const Content = styled.div``;
const Featured = styled.div`
  margin: 1rem;
  font-size: 1.1rem;
`;
