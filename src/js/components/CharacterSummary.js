import React, { Component } from 'react';
import AllAttributesSummaryWindow from './AllAttributesSummaryWindow';

export default class CharacterSummary extends Component {

    render() {
        return (
            <div class="container additional-margin-top--less">
                <div class="row">
                    <AllAttributesSummaryWindow />
                </div>
            </div>
        );
    }
}
