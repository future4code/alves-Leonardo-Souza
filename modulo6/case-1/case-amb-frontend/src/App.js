import axios from "axios"; 
import { useEffect, useState } from "react";
import { BASE_URL } from "./constants";

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}/pizzas`)
    .then((res) => {
      setPizzas(res.data.pizzas)
    })
    .catch((err) => {
      console.log(err.response)
    })
    
  },[])
  return (
    <div >
      <ul>
        {pizzas.map((pizza) => {
          return (
            <li>
              <h3>{pizza.name}</h3>
              <p>{pizza.price}</p>
              <p>
                {pizza.ingredients.map((item) => {
                  return (
                    <span>{item}</span>
                  )
                })}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
