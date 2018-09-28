import React from "react"; //para crear componentes
import ReactDOM from "react-dom"; //para renderizar los componentes

/**
 * Acceder al elemento donde se puntará */
const app = document.querySelector("#app");

/**
 * Elementos componente principal
 */
const mainComponent = <h1>Hola mundo!!</h1>;

//Recibe dos parametros(que voy a renderizar, donde lo haré)
ReactDOM.render(mainComponent, app);
