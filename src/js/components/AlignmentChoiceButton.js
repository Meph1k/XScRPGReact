import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/nextStepCharAction';
import "../../styles/attributes.scss";

const AlignmentChoiceButton = (props) => {
    let cssClass = getProperActiveElement(props.alignment, props.lastStep);

    const onButtonClick = (alignment, actions) => (event) => saveAlignmentToStore(alignment, actions);
    
    return (
        <button class={cssClass} onClick={onButtonClick(props.alignment, props.actions)}>
            <span class="attribute-choice-button__text">{props.alignment}</span>
        </button>
    );
};

const saveAlignmentToStore = (alignment, actions) => {
    return actions.saveAlignment(alignment);
};

const getProperActiveElement = (alignment, lastStep) => {
    if (alignment === lastStep.alignment) {
        return 'attribute-choice-button active-element';
    }

    return 'attribute-choice-button';
};

const mapStateToProps = (store) => {
    return {
        abilities: store.nextStep.abilities,
        lastStep: store.nextStep
    }
};

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actionCreators, dispatch) }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlignmentChoiceButton);
