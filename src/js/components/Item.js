import React from 'react';
import { connect } from "react-redux"
import "../../styles/equipment.scss";

const Item = (props) => {
    return (
        <div class={props.className}>♘</div>
    );
};

export default connect()(Item);
