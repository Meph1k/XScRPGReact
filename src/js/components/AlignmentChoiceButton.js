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
    constructor(props) {
        super(props);
        this.saveAlignment = this.saveAlignment.bind(this);
    }
    
    saveAlignment() {
        return this.props.dispatch(saveAlignment(this.props.alignment));
    }

    getProperActiveElement() {
        if (this.props.alignment === this.props.lastStep.alignment) {
            return 'attribute-choice-button active-element';
        }

        return 'attribute-choice-button';
    }

    render() {
        let cssClass = this.getProperActiveElement();

        return (
            <button class={cssClass} onClick={this.saveAlignment}>
                <span class="attribute-choice-button__text">{this.props.alignment}</span>
            </button>
        );
    }
}
