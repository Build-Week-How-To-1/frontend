import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';

import axiosWithAuth from "../utils/axiosWithAuth";
import HowToForm from './HowToForm';
import HowToContext from "../contexts/HowToContext";

import dummyHowTos from "../dummyData";


const initialHowTo = {
    title: "",
    steps: "",
    resources: "",
    id: ""
};

const HowToCardList = () => {
    const { howTos, setHowTos } = useContext(HowToContext);
    const [howToEdit, setHowToEdit] = useState(dummyHowTos);
    const [editing, setEditing] = useState(false);

    const {push} = useHistory();
    const params = useParams();

    // get request for howTos
    const getHowTos = () => {
        axios
            .get('https://reqres.in/api/howtos')
            .then(res => setHowTos(res.data))
            .catch(err => console.log(err));
    };

    // use effect to call getHowTos ^
    useEffect(() => {
        getHowTos();
    }, []);



    //  delete howTo
     const deleteHowTo = (e) => {
         e.preventDefault()
        axiosWithAuth()
            .delete(`/${dummyHowTos.id}`, howTos)
            .then((res) => {
                console.log('delete res:', res);
                getHowTos()
                setEditing(false);
                push('/howto-form')
            })
            .catch(err => console.log("delete err:", err));
     }

  
     return (
         <div className="howto-list">
                {dummyHowTos.map((dummyHowTo) => (
                    <HowToCard>
                        <div classname="howto-card">
                            <h4>{dummyHowTo.title}</h4>
                            <p>{dummyHowTo.steps}</p>
                            <p>{dummyHowTo.resources}</p>
                        </div>
                        <Button className="delete" 
                        onClick={deleteHowTo}>
                            Delete
                        </Button>
                        <Button className="edit" 
                        onClick={() => push(`/edit-howto`)}>
                            Edit How-To
                        </Button>
                        </HowToCard>
                ))}
            
         </div>
     )
}

export default HowToCardList;

// const sortAscending = () => {
//     const { howto } = //state here//
//     howto.sort((a,b) => a - b)
//     /*setState*/({ howto })
// }

// const sortDescending = () => {
//     const { howto } = //state here//
//     howto.sort((a,b) => a - b).reverse()
//     /*setState*/({ howto })
// }

// return (
//     <div>
//         <ul>
//             {howto.map((item) => {
//                 return <li>{item}</li>;
//             })}
//         </ul>
//         <button onClick={sortAscending}>Ascending</button>
//         <button onClick={sortDescending}>Descending</button>
//     </div>
// )


const HowToCard = styled.div`
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 1rem;
    background-color: lightgray;
    border: 0.3rem solid gray;
`

const Button = styled.button`
    border: 1px solid orange;
    margin: 7px;
`