import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/nextStepCharAction';
import "../../styles/attributes.scss";

const GenderChoiceSquare = (props) => {
    let cssClass = getProperActiveElement(props);
    
    return (
        <div class={cssClass}
             onClick={() => chooseSex(props)}>{getProperSymbol(props.sex)}
        </div>
    );
};

const getProperSymbol = (sex) => {
    if ('female' === sex) {
        return '♀';
    }

    return '♂';
};

const getProperActiveElement = (props) => {
    if (props.sex === props.lastStep.gender) {
        return 'col-sm-5 col-sm-offset-1 gender-choice-square active-element';
    }

    return 'col-sm-5 col-sm-offset-1 gender-choice-square';
};

const chooseSex = (props) => {
    props.actions.saveGender(props.sex);

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

export default connect(mapStateToProps, mapDispatchToProps)(GenderChoiceSquare);
