import { useEffect, useState } from "react";
//Fetch a DolarApi///////////////////

const ValorDolar = () => {
 const [dolarblue, setBlue] = useState(0);

  useEffect(() => {

    fetch(
      "https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/dolarblue"
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => setBlue(response.venta+500));
  }, []);

 return dolarblue;
  ///////////////////////////////
};



export const  getDolar = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ValorDolar())
            console.log(ValorDolar());
        }, 2500)
    })
}