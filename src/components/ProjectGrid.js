import React, { Component } from 'react';
import ProjectCard from './ProjectCard'


export default class ProjectGrid extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
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
                </div>
            </div>
        );
    }
}

