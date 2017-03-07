import React, { Component } from 'react';
import { alignmentChoiceTitles } from '../constants/AttributeChoiceTitles';
import AlignmentChoiceButton from './AlignmentChoiceButton';
import { connect } from "react-redux"

import "../../styles/attributes.scss";

const AlignmentChoiceWindow = () => {
    return (
        <div class="col-sm-6"><div class="all-attrs-window">{createAttrsWindow()}</div></div>
    );
};

const createAttrsWindow = () => {
    return alignmentChoiceTitles.map((i, index) => <div key={index}><AlignmentChoiceButton alignment={i} /></div>)
};

export default connect()(AlignmentChoiceWindow);
