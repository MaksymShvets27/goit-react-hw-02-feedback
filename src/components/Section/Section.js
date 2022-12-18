import React from "react";
import './Section.css';

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title
        this.children = props.children
    }
    render() {
        return (
            <div className="section">
                <h2 className="title">{this.title}</h2>
                {this.children}
            </div>
        )
    }
}
export default Section;