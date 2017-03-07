import React from "react";
import EquipmentSquare from "./EquipmentSquare";
import { connect } from "react-redux"

const EquipmentLowerPart = () => {
    return (
        <div class="container">
            <div class="row eq-lower-part-container">
                {() => createEqLowerPart()}
            </div>
        </div>
    );
};

const createEqLowerPart = () => {
    let numberArray = [];
    for (let i = 0; i < 120; i++) {
        numberArray.push(i);
    }

    return numberArray.map((i) => <div class="col-sm-1 custom-width" key={i}><EquipmentSquare /></div>)
};

export default connect()(EquipmentLowerPart);
