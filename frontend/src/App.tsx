import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import AddWilder from './components/addwilder/Addwilder';
import Wilder from "./components/wilder/Wilder";

function App() {

  interface ISkills {
    title: string
    votes: number
  }
  
  interface IWildersArrayObjects {
   id: number
   name: string
   city: string
   skills: ISkills[]
  }
const [wildersState, setWildersState] = useState<IWildersArrayObjects>([] as any);
console.log(wildersState, "wildersState");


  useEffect(() => {
    const fetchData = async () => {
      const wildersApi = await axios.get("http://localhost:5000/api/wilder");
      console.log(wildersApi.data, "wilder.data");
      setWildersState(wildersApi.data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <div>
          <h3>Add a wilder</h3>
          <AddWilder />
        </div>
        <section className="card-row">
          {wildersState.map((wilderState) => (
          <Wilder
          key={wilderState.id}
          name={wilderState.name}
          skills={wilderState.skills}
          city={wilderState.city}
          wilderId={wilderState.id}/>
          ))}

        </section>

      </main>
    </div>
  );
};

export default App;
