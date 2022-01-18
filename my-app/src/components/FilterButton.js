import React, { Component } from "react";
import PropTypes from 'prop-types'

class FilterButton extends Component {

    render() {
        return (
            <button
                type="button"
                className="btn toggle-btn"
                onClick={() => this.props.setFilter(this.props.name)}
            >
                <span className="visually-hidden">Show </span>
                <span>{this.props.name}</span>
                <span className="visually-hidden"> tasks</span>
            </button>
        );
    }
}

FilterButton.propTypes ={
    name: PropTypes.string,
    setFilter: PropTypes.func
}

export default FilterButton;