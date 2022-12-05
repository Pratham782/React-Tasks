import { useState } from "react";
import {push, ref, set} from 'firebase/database';
import {db} from '../component/config';

export default function Form(){
    let[text,getText] = useState("");

    function handleChange(e){
        getText(e.target.value);
    }

    function handleClick(e){
        e.preventDefault();
        if(text !== ""){
            let dataRef = ref(db,"datauser");
            let setRef = push(dataRef);
            set(setRef,{username:text});
        }
        getText("");
    }
    return(
        <form className="formStyle d-flex align-items-center justify-content-evenly flex-column">
        <input type="text" onChange={handleChange} value={text}/>
        <div>
          <input type="submit" className="btn btn-outline-dark btn-lg me-2" onClick={handleClick}/>
        </div>
      </form>
    )
}