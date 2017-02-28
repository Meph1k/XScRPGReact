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
        this.state = {
            cssClass: 'attribute-choice-button'
        }
    }
    
    getProperActiveElement() {
        if (this.props.classOfACharacter === this.props.lastStep.class) {
            return this.state.cssClass = 'attribute-choice-button active-element';
        }
        
        return this.state.cssClass = 'attribute-choice-button';
    }
    
    saveClass() {
        this.props.dispatch(saveClass(this.props.classOfACharacter));

        return this.getProperActiveElement();
    }

    render() {
        return (
            <button class={this.state.cssClass} onClick={this.saveClass.bind(this)}>
                <span class="attribute-choice-button__text">{this.props.classOfACharacter}</span>
            </button>
        );
    }
}
