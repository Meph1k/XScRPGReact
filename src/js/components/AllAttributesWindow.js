import React, { Component } from 'react';
import AttributeChoiceButton from './AttributeChoiceButton';
import { attributeChoiceTitles } from '../constants/AttributeChoiceTitles';
import ResetAndAccept from './ResetAndAccept';
import { connect } from "react-redux"
import "../../styles/attributes.scss";

const AllAttributesWindow = () => {
    return (
        <div class="col-sm-6">
            <div class="all-attrs-window">{createAttrsWindow()}</div>
            <ResetAndAccept />
        </div>
    );
};

const createAttrsWindow = () => {
    return attributeChoiceTitles.map((i, index) => <div key={index}><AttributeChoiceButton step={index} buttonTitle={i} /></div>)
};

const mapStateToProps = (store) => {
    return {
        lastStep: store.nextStep
    }
};

export default connect(mapStateToProps)(AllAttributesWindow);
