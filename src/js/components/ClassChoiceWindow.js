import React, { Component } from 'react';
import { classChoiceTitles } from '../constants/AttributeChoiceTitles';
import ClassChoiceButton from './ClassChoiceButton';
import { connect } from "react-redux"
import "../../styles/attributes.scss";

const ClassChoiceWindow = () => {
    return (
        <div class="col-sm-6"><div class="all-attrs-window">{createAttrsWindow()}</div></div>
    );
};

const createAttrsWindow = () => {
    return classChoiceTitles.map((i, index) => <div key={index}><ClassChoiceButton classOfACharacter={i} /></div>)
};

export default connect()(ClassChoiceWindow);
