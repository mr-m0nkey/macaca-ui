import React, { Component } from 'react';
import ProjectGrid from './ProjectGrid'

export default class MainContent extends Component {
    render() {
        return (
            <main className="container">
                <ProjectGrid/>
            </main>
        );
    }
}

