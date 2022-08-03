import { useEffect, useState } from "react";
//Fetch a DolarApi///////////////////

const ValorDolar = () => {
/*  const [dolarblue, setBlue] = useState(0);

  useEffect(() => {

    fetch(
      "https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/dolarblue"
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => setBlue(response.venta+500))
      .catch(error => {setBlue(300)});
  }, []); */
  const dolarblue =10;

 return (dolarblue);
  ///////////////////////////////
};


export const  getDolar = () => {
    return (ValorDolar);
}