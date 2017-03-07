import React, { Component } from 'react';
import GenderChoice from './GenderChoice';
import RaceChoiceWindow from './RaceChoiceWindow';
import ClassChoiceWindow from './ClassChoiceWindow';
import AlignmentChoiceWindow from './AlignmentChoiceWindow';
import AbilitiesWindow from './AbilitiesWindow';
import NameChoiceWindow from './NameChoiceWindow';
import SkillsWindow from './SkillsWindow';
import { connect } from "react-redux"

const CharacterSpecificationWindow = ({lastStep}) => {
    return (
        <div class="container additional-margin-top--less">
            <div class="row">
                {getProperWindow(lastStep)}
            </div>
        </div>
    );
};

const getProperWindow = (lastStep) => {
    let tempStep = lastStep - 1;
    const components = [<GenderChoice />, <RaceChoiceWindow />, <ClassChoiceWindow />, <AlignmentChoiceWindow />,
        <AbilitiesWindow />, <SkillsWindow />, <NameChoiceWindow />];
  
    return components[tempStep];
};

const mapStateToProps = (store) => {
    return {
        lastStep: store.nextStep.lastStep
    };
};

export default connect(mapStateToProps)(CharacterSpecificationWindow);
