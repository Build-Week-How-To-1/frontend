import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';

import { axiosWithAuth } from "../utils/axiosWithAuth";
import HowToForm from './HowToForm';
import HowToContext from "../contexts/HowToContext";
import { fetchHowTos } from "../components/fetchHowTos";


const initialHowTo = {
    title: "",
    instructions: "",
    steps: "",
    tips: "",
    id: ""
};

const HowToCardList = () => {
    const { howTos, setHowTos } = useContext(HowToContext);
    const [howToEdit, setHowToEdit] = useState(initialHowTo);
    const [editing, setEditing] = useState(false);

    // get request for howTos
    const getHowTos = () => {
        axios
            .get('https://how-to1.herokuapp.com/howtos')
            .then(res => setHowTos(res.data))
            .catch(err => console.log(err));
    };

    // use effect to call getHowTos ^
    useEffect(() => {
        getHowTos();
    }, []);


    // edit howTo
    const editHowTo = (howTo) => {
        setEditing(true);
        setHowToEdit(howTo);
    };

    const saveEdit = (e) => {
        e.preventDefault();

        axiosWithAuth()
            .put(`/howtos/${howToEdit.id}`, howToEdit)
            .then((res) => {
                console.log("Edit put res:", res.data);
            })
            .catch((err) => {
                console.log("edit put error:", err);
            })
    
     }

    //  delete howTo
     const deleteHowTo = (howTo) => {
        axiosWithAuth()
            .delete(`/howtos/${howTos.id}`)
            .then((res) => {
                console.log('delete res:', res);
                setHowTos(howToEdit);
                setEditing(false);
            })
            .catch(err => console.log("delete err:", err));
     }

  
     return (
         <div className="howto-list">
             <HowToForm />
             <ul>
                {howTos.map((howTo) => (
                    <li key={howTo.id} onClick={() => editHowTo(howTo)}>
                        <button className="delete" 
                        onClick={deleteHowTo}>
                            Delete
                        </button>
                    </li>
                ))}
             </ul>
            
         </div>
     )

    


}

export default HowToCardList;

