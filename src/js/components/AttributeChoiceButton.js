import React, { Component } from 'react';
import { saveLastStep } from '../actions/nextStepCharAction';
import { connect } from "react-redux";
import "../../styles/attributes.scss";

@connect((store) => {
    return {
        lastStep: store.nextStep.lastStep
    };
})
export default class AttributeChoiceButton extends Component {
    constructor(props) {
        super(props);
        this.saveLastStep = this.saveLastStep.bind(this);
    }
    
    saveLastStep() {
        return this.props.dispatch(saveLastStep(this.props.step + 1));
    }

    render() {
        return (
            <div>
                {this.props.lastStep !== this.props.step ? (
                    <button class="attribute-choice-button" disabled>
                        <span class="attribute-choice-button__text">{this.props.buttonTitle}</span>
                    </button>) :
                    <button class="attribute-choice-button" onClick={this.saveLastStep}>
                        <span class="attribute-choice-button__text">{this.props.buttonTitle}</span>
                    </button>}
            </div>
        )
    }
}
