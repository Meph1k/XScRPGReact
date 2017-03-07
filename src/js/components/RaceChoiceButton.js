import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/nextStepCharAction';
import { connect } from "react-redux"
import "../../styles/attributes.scss";

const RaceChoiceButton = (props) => {
    let cssClass = getProperActiveElement(props);

    return (
        <button class={cssClass} onClick={() => saveRace(props)}>
            <span class="attribute-choice-button__text">{props.race}</span>
        </button>
    );
};

const saveRace = (props) => {
    return props.actions.saveRace(props.race);
};

const getProperActiveElement = (props) => {
    if (props.race === props.lastStep.race) {
        return 'attribute-choice-button active-element';
    }

    return 'attribute-choice-button';
};

const mapStateToProps = (store) => {
    return {
        lastStep: store.nextStep
    };
};

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actionCreators, dispatch) }
};

export default connect(mapStateToProps, mapDispatchToProps)(RaceChoiceButton);
