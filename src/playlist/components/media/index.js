import React, { Component } from "react";
import "./media.css";
class Media extends Component {
  render() {
    return (
      <div className="cardMedia">
        <div>
          <img
            src="http://eslamoda.com/wp-content/uploads/sites/2/2017/08/ropa-casual.png"
            width={260}
            height={160}
          />
        </div>
        <span className="mediaSpan">Ropa Verano 2018</span>
        <span className="mediaSpan">Modelo: Chicas lindas</span>
      </div>
    );
  }
}

export default Media;
