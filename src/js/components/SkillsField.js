import React, { Component } from 'react';
import { connect } from "react-redux"
import { saveSkills } from '../actions/nextStepCharAction';
import ChangeSkillLevel from './ChangeSkillLevel';

require("../../styles/attributes.scss");

class SkillsField extends Component {
    constructor(props) {
        super(props);
    }

    saveSkills(skills) {
        return this.props.dispatch(saveSkills(skills));
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    componentWillMount() {
        this.props.skills[this.props.skillName.toLowerCase()] = this.getRandomInt(0, 3);
        this.saveSkills(this.props.skills);
    }

    getSkillValue() {
        return this.props.skills[this.props.skillName.toLowerCase()];
    }

    render() {
        return (
            <div class="row">
                <div class="col-sm-7">
                    {this.props.skillName}
                </div>
                <div class="col-sm-3">
                    {this.getSkillValue()}
                </div>
                <div class="col-sm-1">
                    <ChangeSkillLevel skillName={this.props.skillName} sign="+" />
                </div>
                <div class="col-sm-1">
                    <ChangeSkillLevel skillName={this.props.skillName} sign="-" />
                </div>
            </div>
        );
    }
}
const mapStateToProps = (store, ownProps) => {

    return {
        skills: {...store.nextStep.skills}
    }
};

export default connect(mapStateToProps)(SkillsField);
