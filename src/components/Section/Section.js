import React from "react";
import './Section.css';
import PropTypes from 'prop-types';

class Section extends React.Component {
    render() {
        return (
            <div className="section">
                <h2 className="title">{this.props.title}</h2>
                {this.props.children}
            </div>
        )
    }
}
Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};
export default Section;