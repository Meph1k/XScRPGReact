import React, { Component } from 'react';
import { saveName } from '../actions/nextStepCharAction';
import { connect } from "react-redux"
import "../../styles/attributes.scss";

@connect((store) => {
    return {
        lastStep: store.nextStep
    };
})
export default class NameChoiceWindow extends Component {
    constructor(props) {
        super(props);
        this.nameChoice = null;
    }
    
    saveName() {
        return this.nameChoice === null ? 'unknown name' : this.props.dispatch(saveName(this.props.nameChoice));
    }

    render() {
        return (
            <div>
                <input ref={(input) => { this.nameChoice = input; }} id="nameChoice" type="text" />
                <button onClick={this.saveName.bind(this)}>Set name</button>
            </div>
        );
    }
}