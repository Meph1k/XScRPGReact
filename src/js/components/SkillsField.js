import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/nextStepCharAction';
import ChangeSkillLevel from './ChangeSkillLevel';
import "../../styles/attributes.scss";

const SkillsField = (props) => {
    return (
        <div class="row">
            <div class="col-sm-7">
                {props.skillName}
            </div>
            <div class="col-sm-3">
                {getSkillValue(props)}
            </div>
            <div class="col-sm-1">
                <ChangeSkillLevel skillName={props.skillName} sign="+" />
            </div>
            <div class="col-sm-1">
                <ChangeSkillLevel skillName={props.skillName} sign="-" />
            </div>
        </div>
    );
};

const getSkillValue = (props) => {
    return Object.values(props.skills)[props.skillNumber];
};

const mapStateToProps = (store) => {

    return {
        skills: {...store.nextStep.skills}
    }
};

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actionCreators, dispatch) }
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillsField);
