import React, { Component } from "react";
import PropTypes from "prop-types";
import "./media.css";
//Componente
class Media extends Component {
  //Estado de la aplicación
  state = {
    author: this.props.author
  };

  handleClick = event => {
    this.setState({ author: "Un usuario anónimo!" });
  };

  //Metodo de render
  render() {
    //Obtener los valor que nos pasen
    let { image, title } = this.props;
    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            src={image}
            className="Media-image"
            alt={title}
            width="260"
            height="160"
          />
        </div>
        <h3 className="Media-title">{title}</h3>
        <p className="Media-author">{this.state.author}</p>
      </div>
    );
  } //end method render
} //end class

//Asignar los tipos de datos de las props para validar correctamente
Media.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(["video", "audio"])
};
export default Media;
