import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/nextStepCharAction';
import { connect } from "react-redux";
import "../../styles/attributes.scss";

const AttributeChoiceButton = ({actions, lastStep, step, buttonTitle}) => {
    const onButtonClick = (step, actions) => (event) => saveLastStep(actions, step);
    
    return (
        <div>
            {lastStep !== step ? (
                <button class="attribute-choice-button" disabled>
                    <span class="attribute-choice-button__text">{buttonTitle}</span>
                </button>) :
                <button class="attribute-choice-button" onClick={onButtonClick(step, actions)}>
                    <span class="attribute-choice-button__text">{buttonTitle}</span>
                </button>}
        </div>
    )
};

const saveLastStep = (actions, step) => {
    return actions.saveLastStep(step + 1);
};

const mapStateToProps = (store) => {
    return {
        lastStep: store.nextStep.lastStep
    }
};

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actionCreators, dispatch) }
};

export default connect(mapStateToProps, mapDispatchToProps)(AttributeChoiceButton);
