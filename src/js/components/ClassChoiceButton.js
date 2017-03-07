import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/nextStepCharAction';
import { connect } from "react-redux"
import "../../styles/attributes.scss";

const ClassChoiceButton = (props) => {
    let cssClass = getProperActiveElement(props);

    return (
        <button class={cssClass} onClick={() => saveClass(props)}>
            <span class="attribute-choice-button__text">{props.classOfACharacter}</span>
        </button>
    );
};

const getProperActiveElement = (props) => {
    if (props.classOfACharacter === props.lastStep.class) {
        return 'attribute-choice-button active-element';
    }

    return 'attribute-choice-button';
};

const saveClass = (props) => {
    props.actions.saveClass(props.classOfACharacter);

    return getProperActiveElement(props);
};

const mapStateToProps = (store) => {
    return {
        lastStep: store.nextStep
    };
};

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actionCreators, dispatch) }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassChoiceButton);
