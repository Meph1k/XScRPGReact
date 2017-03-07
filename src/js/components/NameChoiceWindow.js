import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/nextStepCharAction';
import "../../styles/attributes.scss";

const NameChoiceWindow = (props) => {
    const onButtonClick = (props) => (event) => saveNameToStore(props);
    
    return (
        <div>
            <input id="nameChoice" type="text" />
            <button onClick={onButtonClick(props)}>Set name</button>
        </div>
    );
};

const saveNameToStore = (props) => {
    let customName = document.querySelector('#nameChoice').value;

    return props.actions.saveName(customName);
};

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actionCreators, dispatch) }
};

export default connect(null, mapDispatchToProps)(NameChoiceWindow);
