import React, { Component } from 'react';
import { connect } from "react-redux"
import "../../styles/attributes.scss";

const Attribute = (props) => {
    return (
        <div>
            {'ability' === props.type ? (
            <div>
                {props.attributeName}:
                {props.lastStep.abilities[props.attributeName.toLowerCase()]}
            </div>) : (
            <div>
                {props.attributeName}:
                {Object.values(props.lastStep.skills)[props.skillNumber]}
            </div>)
            }
        </div>
    )
};

const mapStateToProps = (store) => {
    return {
        lastStep: store.nextStep
    }
};

export default connect(mapStateToProps)(Attribute);
