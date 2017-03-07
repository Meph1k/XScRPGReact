import React, { Component } from 'react';
import Attribute from './Attribute';
import { connect } from "react-redux"
import "../../styles/attributes.scss";

const AllAttributesSummaryWindow = ({lastStep}) => {
    return (
        <div class="col-sm-6">
            {showAbilities(lastStep)}
            {lastStep.alignment}
            {lastStep.class}
            {lastStep.gender}
            {lastStep.race}
            {showSkills(lastStep)}
            {lastStep.name}
        </div>
    );
};

const showAbilities = (lastStep) => {
    return Object.keys(lastStep.abilities).map((key, index) =>
        <div key={key}><Attribute attributeName={key} type="ability" /></div>);
};

const showSkills = (lastStep) => {
    return Object.keys(lastStep.skills).map((key, index) =>
        <div key={key}><Attribute attributeName={key} type="skill" skillNumber={index} /></div>);
};

const mapStateToProps = (store) => {
    return {
        lastStep: {...store.nextStep}
    }
};

export default connect(mapStateToProps)(AllAttributesSummaryWindow);