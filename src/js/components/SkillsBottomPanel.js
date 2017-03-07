import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/nextStepCharAction';
import "../../styles/attributes.scss";

const SkillsBottomPanel = (props) => {
    const onButtonClick = (props) => (event) => saveSkills(props);
    
    return (
        <div>
            <button onClick={onButtonClick(props)}>REROLL</button>
        </div>
    );
};

const saveSkills = (props) => {
    return props.actions.saveSkills();
};

const mapStateToProps = (store) => {
    return {
        skills: store.nextStep.skills
    };
};

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actionCreators, dispatch) }
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillsBottomPanel);
