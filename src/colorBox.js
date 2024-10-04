import React, { Component } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './colorbox.css';

class Colorboxes extends Component {
    constructor(props) {
        super(props);
        this.state = { copied: false };
    }

    handleCopy = () => {
        this.setState({ copied: true });
        setTimeout(() => this.setState({ copied: false }), 2000); 
    };

    render() {
        const { name, background } = this.props;
        const { copied } = this.state;
        
        return (
            <div style={{ background }} className="boxes">
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <CopyToClipboard text={background} onCopy={this.handleCopy}>
                        <button className="copy-btn">
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </CopyToClipboard>
                </div>
                <span className="see-more">More</span>
            </div>
        );
    }
}

export default Colorboxes;
