import React, {propTypes} from "react"
import { connect } from "react-redux"
import Item from "./Item";
import "../../styles/equipment.scss";

@connect((store) => {
    return {
        lastStep: store.nextStep
    };
})
export default class ItemField extends React.Component {
    render() {
        return <div><Item class={this.props.className}/></div>
    }
}
