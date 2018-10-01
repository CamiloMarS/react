import React from "react"; //para crear componentes
import ReactDOM from "react-dom"; //para renderizar los componentes

import Media from "./src/playlist/components/media";
import data from "./src/api.json";
/**
 * Acceder al elemento donde se puntará */
const app = document.querySelector("#app");

//Recibe dos parametros(que voy a renderizar, donde lo haré)
ReactDOM.render(
  <Media
    image="http://eslamoda.com/wp-content/uploads/sites/2/2017/08/ropa-casual.png"
    title="¿Qué es Responsive Design?"
    author="Camilo Mar Salazar"
    type="video"
  />,
  app
);
