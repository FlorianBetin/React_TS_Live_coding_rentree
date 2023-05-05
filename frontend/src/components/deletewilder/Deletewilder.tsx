import axios from "axios";

const DeleteWilder = ({wilderId}: {wilderId: number}) => {
    console.log(wilderId, "wilderId")
    return (
        <form 
        onSubmit={(e) => {
            console.log(wilderId, "après async")
            e.preventDefault();
             axios.delete(`http://localhost:5000/api/wilder/${wilderId}`).then((data)=> (console.log));
            console.log("après requete")
          }}
        >
        <button>Delete</button>
        </form>
    );
};

export default DeleteWilder;