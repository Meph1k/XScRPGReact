import React, { Component } from 'react';
import { connect } from "react-redux"
import { saveAbilitiesPoints, saveAbilities } from '../actions/nextStepCharAction';
import "../../styles/attributes.scss";

@connect((store) => {
    return {
        abilities: store.nextStep.abilities,
        abilitiesPoints: store.nextStep.abilitiesPoints
    };
})
export default class ChangeAbilityLevel extends Component {
    constructor(props) {
        super(props);
        this.changeAbilityLevel = this.changeAbilityLevel.bind(this);
    }
    
    saveAbilitiesPoints(action) {
        return this.props.dispatch(saveAbilitiesPoints('-' === action ? this.props.abilitiesPoints - 1 : this.props.abilitiesPoints + 1));
    }

    changeAbilityLevel() {
        if ('+' === this.props.sign && this.props.abilitiesPoints > 0) {
            this.props.abilities[this.props.abilityName.toLowerCase()]++;
            this.props.dispatch(saveAbilities(this.props.abilities));

            return this.saveAbilitiesPoints('-');
        }
        if ('-' === this.props.sign && this.props.abilities[this.props.abilityName.toLowerCase()] > 0) {
            this.props.abilities[this.props.abilityName.toLowerCase()]--;
            this.props.dispatch(saveAbilities(this.props.abilities));

            return this.saveAbilitiesPoints('+');
        }
    }

    render() {
        return (
            <div>
                <div class="change-ability-level" onClick={this.changeAbilityLevel}>{this.props.sign}</div>
            </div>
        );
    }
}
