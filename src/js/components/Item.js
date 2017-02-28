import React from 'react';
import "../../styles/equipment.scss";

export default class Item extends React.Component {
    render() {
        return (
            <div class={this.props.className}>♘</div>
        );
    }
}

