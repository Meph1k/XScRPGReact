import React, { Component } from 'react';
import { saveRace } from '../actions/nextStepCharAction';
import { connect } from "react-redux"
import "../../styles/attributes.scss";

@connect((store) => {
    return {
        lastStep: store.nextStep
    };
})
export default class RaceChoiceButton extends Component {
    constructor(props) {
        super(props);
        this.saveRace = this.saveRace.bind(this);
    }
    
    saveRace() {
        return this.props.dispatch(saveRace(this.props.race));
    }

    getProperActiveElement() {
        if (this.props.race === this.props.lastStep.race) {
            return 'attribute-choice-button active-element';
        }

        return 'attribute-choice-button';
    }

    render() {
        let cssClass = this.getProperActiveElement();

        return (
            <button class={cssClass} onClick={this.saveRace}>
                <span class="attribute-choice-button__text">{this.props.race}</span>
            </button>
        );
    }
}
