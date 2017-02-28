import React, { Component } from 'react';
import { connect } from "react-redux"
import { saveGender } from '../actions/nextStepCharAction';
import "../../styles/attributes.scss";

@connect((store) => {
    return {
        lastStep: store.nextStep
    };
})
export default class GenderChoiceSquare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cssClass: 'col-sm-5 col-sm-offset-1 gender-choice-square'
        }
    }

    getProperSymbol() {
        if ('female' === this.props.sex) {
            return '♀';
        }
        
        return '♂';
    }

    getProperActiveElement() {
        if (this.props.sex === this.props.lastStep.gender) {
            return this.state.cssClass = 'col-sm-5 col-sm-offset-1 gender-choice-square active-element';
        }
        
        return this.state.cssClass = 'col-sm-5 col-sm-offset-1 gender-choice-square';
    }
    
    chooseSex() {
        this.props.dispatch(saveGender(this.props.sex));

        return this.getProperActiveElement();
    }

    render() {
        return (
            <div class={this.state.cssClass}
                 onClick={this.chooseSex.bind(this)}>{this.getProperSymbol()}
            </div>
        );
    }
}
