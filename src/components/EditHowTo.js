import React, { useState, useEffect } from 'react';
import axios from "axios"
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';


const initialHowTo = {
    title: "",
    steps: "",
    resources: "",
    id: ""
}

const EditHowTo = (props) => {
    const [howTo, setHowTo] = useState(initialHowTo);
    const { push } = useHistory();
    const params = useParams();

    useEffect(() => {
        axios
            .get(`https://reqres.in/api/${params.id}`)
            .then(res => {
                setHowTo(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const changeHandler = e => {
        e.persist()
        setHowTo({
            ...howTo,
            [e.target.name]: e.target.value
        })
        console.log(howTo);
    }

    const submitHandler = e => {
        e.preventDefault();
        axios
            .put(`https://reqres.in/api/${params.id}`, howTo)
            .then(res => {
                props.history.push('/howto-form');
            })
            .catch(err => console.log(err));
    }

    return (
        <HowCard>
            <h2>Update How-To</h2>
            <form onSubmit={submitHandler}>
        <label htmlFor="title">
          Title - Add a catchy title
          <input
            type="text"
            name="title"
            id="title"
            value={howTo.title}
            onChange={changeHandler}
          />
        </label>
        <label htmlFor="steps">
          Steps - Enter each step to your process here
          <textarea
            type="text"
            name="steps"
            id="steps"
            value={howTo.steps}
            onChange={changeHandler}
          />
        </label>
        <label htmlFor="resources">
          Resources - Enter any tips, warnings, supplies needed, etc
          <textarea
            type="text"
            name="resources"
            id="resources"
            value={howTo.resources}
            onChange={changeHandler}
          />
        </label>
        <button type="submit">
          Update How-To
        </button>
      </form>
     </HowCard>
    )
}

export default EditHowTo;

const HowCard = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 1rem;
  background-color: lightgray;
  border: 0.3rem solid gray;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    label {
      display: flex;
      flex-direction: column;
    }

    input {
      width: 35rem;
      border: 0.1rem solid orange;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    textarea {
      width: 35rem;
      border: 0.1rem solid orange;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 700px) {
    width: 25rem;
    text-align: center;

    label {
      display: flex;
      justify-content: center;
      width: 22rem;
    }

    form input {
      width: 100%;
    }

    form textarea {
      width: 100%;
    }
  }
`