import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/nextStepCharAction';
import "../../styles/attributes.scss";

const ChangeSkillLevel = (props) => {
    return (
        <div>
            <div class="change-ability-level" onClick={() => changeSkillLevel(props)}>{props.sign}</div>
        </div>
    );
};

const changeSkillLevel = (props) => {
    if ('+' === props.sign && props.skillPoints > 0) {
        props.skills[props.skillName.toLowerCase()]++;
        props.actions.saveSkills(props.skills);
        return props.actions.saveSkillPoints(props.skillPoints - 1);
    }
    if ('-' === props.sign && props.skills[props.skillName.toLowerCase()] > 0) {
        props.skills[props.skillName.toLowerCase()]--;
        props.actions.saveSkills(props.skills);
        return props.actions.saveSkillPoints(props.skillPoints + 1);
    }
};

const mapStateToProps = (store) => {
    return {
        skills: store.nextStep.skills,
        skillPoints: store.nextStep.skillPoints
    };
};

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actionCreators, dispatch) }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeSkillLevel);
