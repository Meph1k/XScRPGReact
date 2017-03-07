import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/nextStepCharAction';
import "../../styles/attributes.scss";

const ChangeAbilityLevel = (props) => {
    const onButtonClick = (props) => (event) => changeAbilityLevel(props);
    
    return (
        <div>
            <div class="change-ability-level" onClick={onButtonClick(props)}>{props.sign}
            </div>
        </div>
    );
};

const saveAbilitiesPoints = (props) => {
    return props.actions.saveAbilitiesPoints('-' === props.sign ? props.abilitiesPoints + 1 : props.abilitiesPoints - 1);
};

const changeAbilityLevel = (props) => {
    if ('+' === props.sign && props.abilitiesPoints > 0) {
        props.abilities[props.abilityName.toLowerCase()]++;
        props.actions.saveAbilities(props.abilities);

        return saveAbilitiesPoints(props);
    }
    if ('-' === props.sign && props.abilities[props.abilityName.toLowerCase()] > 0) {
        props.abilities[props.abilityName.toLowerCase()]--;
        props.actions.saveAbilities(props.abilities);

        return saveAbilitiesPoints(props);
    }
};

const mapStateToProps = (store) => {
    return {
        abilities: store.nextStep.abilities,
        abilitiesPoints: store.nextStep.abilitiesPoints
    }
};

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actionCreators, dispatch) }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeAbilityLevel);
