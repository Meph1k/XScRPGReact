import React, { Component } from 'react';
import { connect } from "react-redux"
import "../../styles/attributes.scss";

@connect((store) => {
    return {
        lastStep: store.nextStep
    };
})
export default class Attribute extends Component {
    render() {
        return (
            <div>
                {'ability' === this.props.type ? (
                <div>
                    {this.props.attributeName}:
                    {this.props.lastStep.abilities[this.props.attributeName.toLowerCase()]}
                </div>) : (
                <div>
                    {this.props.attributeName}:
                    {this.props.lastStep.skills[this.props.attributeName.toLowerCase()]}
                </div>)
                }
            </div>
        )
    }
}
