import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class ProjectCard extends Component {
    render() {
        return (
            <div>
                <Link to="/project">
                <img src={"..."} alt="..." class="img-thumbnail"/>
                </Link>
            </div>
        );
    }
}

