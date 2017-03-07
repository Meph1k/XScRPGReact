import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/nextStepCharAction';
import "../../styles/attributes.scss";

const AbilitiesBottomPanel = ({actions}) => {
    const onButtonClick = (actions) => (event) => saveAbilitiesToStore(actions);
    
    return (
        <div>
            <button onClick={onButtonClick(actions)}>REROLL</button>
        </div>
    );
};

const saveAbilitiesToStore = (actions) => (actions.saveAbilities());

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actionCreators, dispatch) }
};

export default connect(null, mapDispatchToProps)(AbilitiesBottomPanel);
