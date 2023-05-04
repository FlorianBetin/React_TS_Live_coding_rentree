import axios from "axios";
import { useState } from "react";

const DeleteWilder = (wilderId) => {
    console.log(wilderId, "wilderID")
    return (
        <form 
        onSubmit={(e) => {
            console.log(wilderId.wilderId, "après async")
            e.preventDefault();
             axios.delete(`http://localhost:5000/api/wilder/${wilderId.wilderId}`).then((data)=> (console.log));
            console.log("après requete")
          }}
        >
        <button>Delete</button>
        </form>
    );
};

export default DeleteWilder;