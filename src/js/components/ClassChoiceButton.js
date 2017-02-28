import React, { Component } from 'react';
import { saveClass } from '../actions/nextStepCharAction';
import { connect } from "react-redux"
import "../../styles/attributes.scss";

@connect((store) => {
    return {
        lastStep: store.nextStep
    };
})
export default class ClassChoiceButton extends Component {
    constructor(props) {
        super(props);
        this.saveClass = this.saveClass.bind(this);
    }
    
    getProperActiveElement() {
        if (this.props.classOfACharacter === this.props.lastStep.class) {
            return 'attribute-choice-button active-element';
        }
        
        return 'attribute-choice-button';
    }
    
    saveClass() {
        this.props.dispatch(saveClass(this.props.classOfACharacter));

        return this.getProperActiveElement();
    }

    render() {
        let cssClass = this.getProperActiveElement();

        return (
            <button class={cssClass} onClick={this.saveClass}>
                <span class="attribute-choice-button__text">{this.props.classOfACharacter}</span>
            </button>
        );
    }
}
