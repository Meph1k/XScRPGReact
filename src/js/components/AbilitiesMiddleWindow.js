import React, { Component } from 'react';
import AbilitiesField from './AbilitiesField';
import { abilitiesChoiceTitles } from '../constants/AttributeChoiceTitles';
import { connect } from "react-redux"
import "../../styles/attributes.scss";

const AbilitiesMiddleWindow = () => {
    return (
        <div class="all-attrs-window">{createAttrsWindow()}</div>
    );
};

const createAttrsWindow = () => {
    return abilitiesChoiceTitles.map((i, index) => <div key={i}><AbilitiesField abilityName={i} /></div>)
};

const mapStateToProps = (store) => {
    return {
        abilities: store.nextStep.abilities
    };
};

export default connect(mapStateToProps)(AbilitiesMiddleWindow);
