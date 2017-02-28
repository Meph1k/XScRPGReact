import React, { Component } from 'react';
import SkillsField from './SkillsField';
import { skillsChoiceTitles } from '../constants/AttributeChoiceTitles';
import { connect } from "react-redux"
import "../../styles/attributes.scss";

@connect((store) => {
    return {
        skills: store.nextStep.skills
    };
})
export default class SkillsMiddleWindow extends Component {
    createAttrsWindow() {
        return skillsChoiceTitles.map((i, index) => <div key={i}><SkillsField skillName={i} /></div>)
    }

    render() {
        return (
            <div class="all-attrs-window">{this.createAttrsWindow()}</div>
        );
    }
}
