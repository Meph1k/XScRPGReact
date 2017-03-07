import React, { Component } from 'react';
import { connect } from "react-redux"
import ChangeAbilityLevel from './ChangeAbilityLevel';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/nextStepCharAction';
import "../../styles/attributes.scss";

const AbilitiesField = ({abilities, abilityName}) => {
    return (
        <div class="row">
            <div class="col-sm-7">
                {abilityName}
            </div>
            <div class="col-sm-3">
                {getAbilityValue(abilities, abilityName)}
            </div>
            <div class="col-sm-1">
                <ChangeAbilityLevel abilityName={abilityName} sign="+"/>
            </div>
            <div class="col-sm-1">
                <ChangeAbilityLevel abilityName={abilityName} sign="-"/>
            </div>
        </div>
    )
};
const getAbilityValue = (abilities, abilityName) => {
    return abilities[abilityName.toLowerCase()];
};
const mapStateToProps = (store) => {
    return {
        abilities: {...store.nextStep.abilities}
    }
};
const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actionCreators, dispatch) }
};

export default connect(mapStateToProps, mapDispatchToProps)(AbilitiesField);
