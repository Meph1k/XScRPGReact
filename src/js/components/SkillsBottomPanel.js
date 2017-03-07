import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/nextStepCharAction';
import "../../styles/attributes.scss";

const AbilitiesBottomPanel = (props) => {
    return (
        <div>
            <button onClick={() => reRollSkills(props)}>REROLL</button>
        </div>
    );
};

const saveSkills = (props) => {
    return props.actions.saveSkills(props.skills);
};

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const reRollSkills = (props) => {
    for(var key in props.skills) {
        if(props.skills.hasOwnProperty(key)) {
            props.skills[key] = getRandomInt(0, 3);
        }
    }
    saveSkills(props);
};

const mapStateToProps = (store) => {
    return {
        skills: store.nextStep.skills
    };
};

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actionCreators, dispatch) }
};

export default connect(mapStateToProps, mapDispatchToProps)(AbilitiesBottomPanel);
