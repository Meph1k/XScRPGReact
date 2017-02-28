import React, { Component } from 'react';
import { connect } from "react-redux"

require("../../styles/attributes.scss");

@connect((store) => {
    return {
        lastStep: store.nextStep
    };
})
export default class ResetAndAccept extends Component {
    render() {
        return (
            <div class="row">
                <button class="col-sm-2">Accept</button>
                <button class="col-sm-2">Reset</button>
            </div>
        );
    }
}
