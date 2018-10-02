import React from "react"; //para crear componentes
import ReactDOM from "react-dom"; //para renderizar los componentes

import PlayList from "./src/playlist/components/playlist";
import data from "./src/api.json";
/**
 * Acceder al elemento donde se puntará */
const app = document.querySelector("#app");

//Recibe dos parametros(que voy a renderizar, donde lo haré)
ReactDOM.render(<PlayList data={data} />, app);
