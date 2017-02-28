import React, { Component } from 'react';
import { connect } from "react-redux"

require("../../styles/attributes.scss");

@connect((store) => {
    return {
        lastStep: store.nextStep
    };
})
export default class Attribute extends Component {
    render() {
        if ('ability' === this.props.type) {
            return (
                <div>
                    {this.props.attributeName}: 
                    {this.props.lastStep.abilities[this.props.attributeName.toLowerCase()]}
                </div>
            )
        }
        return (
            <div>
                {this.props.attributeName}: 
                {this.props.lastStep.skills[this.props.attributeName.toLowerCase()]}
            </div>
        )

    }
}
