import React, { Component } from 'react';
import { saveAlignment } from '../actions/nextStepCharAction';
import { connect } from "react-redux"
import "../../styles/attributes.scss";

@connect((store) => {
    return {
        lastStep: store.nextStep
    };
})
export default class AlignmentChoiceButton extends Component {
    saveAlignment() {
        return this.props.dispatch(saveAlignment(this.props.alignment));
    }

    render() {
        return (
            <button class="attribute-choice-button" onClick={this.saveAlignment.bind(this)}>
                <span class="attribute-choice-button__text">{this.props.alignment}</span>
            </button>
        );
    }
}
