import React, { Component } from 'react';
import { connect } from "react-redux"
import { saveSkills } from '../actions/nextStepCharAction'

require("../../styles/attributes.scss");

@connect((store) => {
    return {
        skills: store.nextStep.skills
    };
})
export default class AbilitiesBottomPanel extends Component {
    saveSkills() {
        return this.props.dispatch(saveSkills(this.props.skills));
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    reRollSkills() {
        for(var key in this.props.skills) {
            if(this.props.skills.hasOwnProperty(key)) {
                this.props.skills[key] = this.getRandomInt(0, 3);
            }
        }
        this.saveSkills();
    }

    render() {
        return (
            <div>
                <button onClick={this.reRollSkills.bind(this)}>REROLL</button>
            </div>
        );
    }
}
