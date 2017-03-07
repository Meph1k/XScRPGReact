import React, { Component } from 'react';
import AllAttributesSummaryWindow from './AllAttributesSummaryWindow';
import { connect } from "react-redux"

const CharacterSummary = () => {
    return (
        <div class="container additional-margin-top--less">
            <div class="row">
                <AllAttributesSummaryWindow />
            </div>
        </div>
    );
};

const mapStateToProps = (store) => {
    return {
        lastStep: {...store.nextStep}
    }
};

export default connect(mapStateToProps)(CharacterSummary);
