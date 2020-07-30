import React, { useContext, useState } from "react";

import axiosWithAuth from "../utils/axiosWithAuth";
import HowToForm from './HowToForm';
import HowToContext from "../contexts/HowToContext";
import { dummyData } from '../dummyData';

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

 

    // edit howTo
    const editHowTo = (howTo) => {
        setEditing(true);
        setHowToEdit(dummyData);
    };

    const saveEdit = (e) => {
        e.preventDefault();

        // axiosWithAuth()
        // put req
 
     }

     const deleteHowTo = (howTo) => {
        //  axiosWithAuth
        //  delete req
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

