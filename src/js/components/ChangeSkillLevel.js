import React, { Component } from 'react';
import { connect } from "react-redux"
import { saveSkillPoints, saveSkills } from '../actions/nextStepCharAction';

require("../../styles/attributes.scss");

@connect((store) => {
    return {
        skills: store.nextStep.skills,
        skillPoints: store.nextStep.skillPoints
    };
})
export default class ChangeSkillLevel extends Component {
    changeSkillLevel() {
        if ('+' === this.props.sign && this.props.skillPoints > 0) {
            this.props.skills[this.props.skillName.toLowerCase()]++;
            this.props.dispatch(saveSkills(this.props.skills));
            return this.props.dispatch(saveSkillPoints(this.props.skillPoints - 1));
        }
        if ('-' === this.props.sign && this.props.skills[this.props.skillName.toLowerCase()] > 0) {
            this.props.skills[this.props.skillName.toLowerCase()]--;
            this.props.dispatch(saveSkills(this.props.skills));
            return this.props.dispatch(saveSkillPoints(this.props.skillPoints + 1));
        }
    }

    render() {
        return (
            <div>
                <div class="change-ability-level" onClick={this.changeSkillLevel.bind(this)}>{this.props.sign}</div>
            </div>
        );
    }
}
