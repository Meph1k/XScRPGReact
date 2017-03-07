import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/nextStepCharAction';
import "../../styles/attributes.scss";

const AlignmentChoiceButton = ({alignment, actions, lastStep}) => {
    let cssClass = getProperActiveElement(alignment, lastStep);

    return (
        <button class={cssClass} onClick={() => saveAlignmentToStore(alignment, actions)}>
            <span class="attribute-choice-button__text">{alignment}</span>
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
        abilities: {...store.nextStep.abilities},
        lastStep: store.nextStep
    }
};

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actionCreators, dispatch) }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlignmentChoiceButton);
