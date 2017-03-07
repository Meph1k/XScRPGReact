import React, { Component } from 'react';
import { connect } from "react-redux"
import { Router, Route, Link, browserHistory } from 'react-router'
import "../../styles/attributes.scss";

const ResetAndAccept = () => {
    return (
        <div class="row">
            <Link class="col-sm-2" to={`/character-summary`}><button>Accept</button></Link>
            <button class="col-sm-2">Reset</button>
        </div>
    );
};

export default connect()(ResetAndAccept);
