import React, { Component } from "react";
import './colorbox.css'

class Colorboxes extends Component{
    render(){
        const {name,background} = this.props;
        return(
            <div style={{background}} className="boxes">   
                <h1>{name}</h1>
            </div>
        )
    }
}

export default Colorboxes;