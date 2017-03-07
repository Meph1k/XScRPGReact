import React, { Component } from 'react';
import SkillsHeader from './SkillsHeader';
import SkillsMiddleWindow from './SkillsMiddleWindow';
import SkillsBottomPanel from './SkillsBottomPanel';
import { connect } from "react-redux"
import "../../styles/attributes.scss"

const SkillsWindow = () => {
    return (
        <div class="col-sm-6">
            <SkillsHeader />
            <SkillsMiddleWindow />
            <SkillsBottomPanel />
        </div>
    );
};

export default connect()(SkillsWindow);
