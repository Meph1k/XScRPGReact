import React, { Component } from 'react';
import GenderChoiceSquare from './GenderChoiceSquare';
import "../../styles/attributes.scss";
import { connect } from "react-redux"

const GenderChoice = () => {
    return (
        <div class="col-sm-6 gender-choice-container">
            <div class="row">
                <GenderChoiceSquare sex="male" />
                <GenderChoiceSquare sex="female"/>
            </div>
        </div>
    );
};

export default connect()(GenderChoice);
