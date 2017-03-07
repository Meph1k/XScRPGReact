import React, { Component } from 'react';
import RaceChoiceButton from './RaceChoiceButton';
import { raceChoiceTitles } from '../constants/AttributeChoiceTitles';
import { connect } from "react-redux"
import "../../styles/attributes.scss";

const RaceChoiceWindow = () => {
    return (
        <div class="col-sm-6"><div class="all-attrs-window">{createAttrsWindow()}</div></div>
    );
};

const createAttrsWindow = () => {
    return raceChoiceTitles.map((i) => <div key={i}><RaceChoiceButton race={i} /></div>)
};

export default connect()(RaceChoiceWindow);
