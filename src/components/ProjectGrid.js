import React, { Component } from 'react';
import ProjectCard from './ProjectCard'


export default class ProjectGrid extends Component {
    render() {
        return (
            <section className="row">
                <div className="col-sm-4">
                    <ProjectCard/>
                </div>
                <div className="col-sm-4">
                    <ProjectCard/>
                </div>
                <div className="col-sm-4">
                    <ProjectCard/>
                </div>
                <div className="col-sm-4">
                    <ProjectCard/>
                </div>
                <div className="col-sm-4">
                    <ProjectCard/>
                </div>
                <div className="col-sm-4">
                    <ProjectCard/>
                </div>
                <div className="col-sm-4">
                    <ProjectCard/>
                </div>
                <div className="col-sm-4">
                    <ProjectCard/>
                </div>
                <div className="col-sm-4">
                    <ProjectCard/>
                </div>
                <div className="col-sm-4">
                    <ProjectCard/>
                </div>
            </section>
        );
    }
}

