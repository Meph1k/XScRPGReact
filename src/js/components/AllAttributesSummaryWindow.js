import React, { Component } from 'react';
import Attribute from './Attribute';
import { connect } from "react-redux"
import "../../styles/attributes.scss";

@connect((store) => {
    return {
        lastStep: store.nextStep
    };
})
export default class AllAttributesSummaryWindow extends Component {
    showAbilities() {
        return Object.keys(this.props.lastStep.abilities).map((key, index, value) =>
            <div key={index}><Attribute attributeName={key} type="ability" /></div>);
    }

    showSkills() {
        return Object.keys(this.props.lastStep.skills).map((key, index, value) =>
            <div key={index}><Attribute attributeName={key} type="skill" /></div>);
    }

    render() {console.log(this.props.lastStep);
        return (
            <div class="col-sm-6">
                {this.showAbilities()}
                {this.props.lastStep.alignment}
                {this.props.lastStep.class}
                {this.props.lastStep.gender}
                {this.props.lastStep.race}
                {this.showSkills()}
                {this.props.lastStep.name}
            </div>
        );
    }
}
