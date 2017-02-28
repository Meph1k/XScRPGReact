import React, { Component } from 'react';
import { connect } from "react-redux"

require("../../styles/attributes.scss");

@connect((store) => {
    return {
        skillsPoints: store.skillsPoints
    };
})
export default class SkillsHeader extends Component {

    render() {
        return (
            <div class="abilities-header"></div>
        );
    }
}
