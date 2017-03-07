import React, { Component } from 'react';
import EquipmentUpperPart from './EquipmentUpperPart';
import EquipmentLowerPart from './EquipmentLowerPart';
import { connect } from "react-redux"

const Equipment = () => {
    return (
        <div class="equipment-layout">
            <EquipmentUpperPart />
            <EquipmentLowerPart />
        </div>
    );
};

export default connect()(Equipment);
