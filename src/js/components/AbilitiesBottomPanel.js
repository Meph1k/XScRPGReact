import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/nextStepCharAction';
import "../../styles/attributes.scss";

const AbilitiesBottomPanel = ({abilities, actions}) => {
    return (
        <div>
            <button onClick={() => reRollAbilities(abilities, actions)}>REROLL</button>
        </div>
    );
};

const saveAbilitiesToStore = (abilities, actions) => {
    return (actions.saveAbilities(abilities));
};

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const reRollAbilities = (abilities, actions) => {
    for (let key in abilities) {
        if (abilities.hasOwnProperty(key)) {
            abilities[key] = getRandomInt(9, 19);
        }
    }
    saveAbilitiesToStore(abilities, actions);
};

const mapStateToProps = (store) => {
    return {
        abilities: {...store.nextStep.abilities}
    }
};

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actionCreators, dispatch) }
};

export default connect(mapStateToProps, mapDispatchToProps)(AbilitiesBottomPanel);
