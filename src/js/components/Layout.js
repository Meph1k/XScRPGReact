import React from "react"
import { connect } from "react-redux"

const Layout = (props) => {
    return (
        <div>
          {props.children}
        </div>)
};

export default connect()(Layout);
