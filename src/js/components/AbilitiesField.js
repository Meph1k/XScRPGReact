import React, { Component } from 'react';
import { connect } from "react-redux"
import { saveAbilities } from '../actions/nextStepCharAction';
import ChangeAbilityLevel from './ChangeAbilityLevel';
import "../../styles/attributes.scss";

class AbilitiesField extends Component {
    constructor(props) {
        super(props);
    }

    saveAbilities(abilities) {
        return this.props.dispatch(saveAbilities(abilities));
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    componentWillMount() {
        this.props.abilities[this.props.abilityName.toLowerCase()] = this.getRandomInt(9, 19);
        this.saveAbilities(this.props.abilities);
    }

    getAbilityValue() {
        return this.props.abilities[this.props.abilityName.toLowerCase()];
    }

    render() {
        const { abilityName } = this.props;

        return (
            <div class="row">
                <div class="col-sm-7">
                    {abilityName}
                </div>
                <div class="col-sm-3">
                    {this.getAbilityValue()}
                </div>
                <div class="col-sm-1">
                    <ChangeAbilityLevel abilityName={abilityName} sign="+" />
                </div>
                <div class="col-sm-1">
                    <ChangeAbilityLevel abilityName={abilityName} sign="-" />
                </div>
            </div>
        );
    }
}
const mapStateToProps = (store, ownProps) => {
    
    return {
        abilities: {...store.nextStep.abilities}
    }
};

export default connect(mapStateToProps)(AbilitiesField);
