import React, { Component } from "react";
import Media from "../media";
import "./playlist.css";

class PlayList extends Component {
  render() {
    const playlist = this.props.data.categories[0].playlist;
    console.log(playlist);
    return (
      <div className="Playlist">
        {playlist.map(li => {
          return <Media {...li} key={li.id} />;
        })}
      </div>
    );
  }
}

export default PlayList;

/**
 * author: "LeonidasEsteban"
cover: "./images/covers/optimizar.jpg"
id: 2
src: "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
title: "Cómo optimzar la carga de un website"
type: "video"

<Media
          image="http://eslamoda.com/wp-content/uploads/sites/2/2017/08/ropa-casual.png"
          title="¿Qué es Responsive Design?"
          author="Camilo Mar Salazar"
          type="video"
        />
 */
