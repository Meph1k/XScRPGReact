import React, { Component } from 'react';
import { connect } from "react-redux"
import AllAttributesWindow from './AllAttributesWindow';
import CharacterSpecificationWindow from './CharacterSpecificationWindow';

export const CharacterCreation = () => {
    return (
        <div class="container additional-margin-top--less">
            <div class="row">
                <AllAttributesWindow />
                <CharacterSpecificationWindow />
            </div>
        </div>
    );
};

export default connect()(CharacterCreation);
