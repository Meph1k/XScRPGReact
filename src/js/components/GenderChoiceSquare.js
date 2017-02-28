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
        this.chooseSex = this.chooseSex.bind(this);
    }

    getProperSymbol() {
        if ('female' === this.props.sex) {
            return '♀';
        }
        
        return '♂';
    }

    getProperActiveElement() {
        if (this.props.sex === this.props.lastStep.gender) {
            return 'col-sm-5 col-sm-offset-1 gender-choice-square active-element';
        }
        
        return 'col-sm-5 col-sm-offset-1 gender-choice-square';
    }
    
    chooseSex() {
        this.props.dispatch(saveGender(this.props.sex));

        return this.getProperActiveElement();
    }

    render() {
        let cssClass = this.getProperActiveElement();
        
        return (
            <div class={cssClass}
                 onClick={this.chooseSex}>{this.getProperSymbol()}
            </div>
        );
    }
}
