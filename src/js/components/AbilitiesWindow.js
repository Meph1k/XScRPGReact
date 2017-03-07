import React, { Component } from 'react';
import AbilitiesHeader from './AbilitiesHeader';
import AbilitiesMiddleWindow from './AbilitiesMiddleWindow';
import AbilitiesBottomPanel from './AbilitiesBottomPanel';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import "../../styles/attributes.scss";

const AbilitiesWindow = () => {
    return (
        <div class="col-sm-6">
            <AbilitiesHeader />
            <AbilitiesMiddleWindow />
            <AbilitiesBottomPanel />
        </div>
    );
};

const mapStateToProps = (store) => {
    return {
        abilities: {...store.nextStep.abilities}
    }
};

export default connect(mapStateToProps)(AbilitiesWindow);
