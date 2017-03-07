import React, {propTypes} from "react"
import { connect } from "react-redux"
import Item from "./Item";
import "../../styles/equipment.scss";

const ItemField = (props) => {
    return <div><Item class={props.className}/></div>
};

export default connect()(ItemField);
