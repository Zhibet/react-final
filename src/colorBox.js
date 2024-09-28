import React, { Component } from "react";
import './colorbox.css'

class Colorboxes extends Component{
    render(){
        const {name,background} = this.props;
        return(
            <div style={{background}} className="boxes">   
                <div className="copy-container">
                     <div className="box-content">
                        <span>{name}</span>
                     </div>
                     <button className="copy-btn">copy</button>
                </div>
                <span className="see-more">More</span>
            </div>
        )
    }
}

export default Colorboxes;