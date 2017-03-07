import React, { Component } from 'react';
import SkillsField from './SkillsField';
import { skillsChoiceTitles } from '../constants/AttributeChoiceTitles';
import { connect } from "react-redux"
import "../../styles/attributes.scss";

const SkillsMiddleWindow = () => {
    return (
        <div class="all-attrs-window">{createAttrsWindow()}</div>
    );
};

const createAttrsWindow = () => {
    return skillsChoiceTitles.map((i, index) => <div key={i}><SkillsField skillName={i} skillNumber={index} /></div>)
};

export default connect()(SkillsMiddleWindow);
