import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import AddWilder from './components/addwilder/Addwilder';
import Wilder from "./components/wilder/Wilder";
import { IWildersArrayObjects } from "./Interfaces";
import { ISkills } from "./Interfaces";


function App() {

const [wildersState, setWildersState] = useState<IWildersArrayObjects[]>([]);
console.log(wildersState, "wildersState/app.tsx");


  useEffect(() => {
    const fetchData = async () => {
      const wildersApi = await axios.get("http://localhost:5000/api/wilder");
      setWildersState(wildersApi.data);
    };

    fetchData();
  }, []);
  console.log(wildersState, "wilderstate")
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
