import React from "react";
import Media from "../media";
import "./playlist.css";
import Play from "../../../icons/components/play";
import Pause from "../../../icons/components/pause/pause"
import FullScreen from "../../../icons/components/full-screen/fullScreen";

const imprimirVideos = (dato)=>{
  return dato.data.categories.map((current)=>{
      console.log(current.playlist);
      return current.playlist.map((e)=>{
        return  <Media {...e} key={e.id} />;
      });
  });
}


function PlayList(props) {
  const playlist = props.data.categories[0].playlist;
  return (
    <div className="Playlist">
      {imprimirVideos(props)}

    </div>
  );
}

export default PlayList;

/** Llamar a los componentes principales
 * <Play size={30} color="rgba(0,0,0,.5)" />
 * <Pause size={30} color="rgba(0,0,0,.5)"/>
 * <FullScreen size={20} color="rgba(0,0,0,.5)"/>

 {playlist.map(li => {
   return <Media {...li} key={li.id} />;
 })}
 **/
