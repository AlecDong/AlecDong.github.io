import React from 'react';
import Projects from './components/Projects';

function App() {
    const projects = [
        {
            title: "Human Action Recognition",
            description: "This is a project",
            link: "https://github.com/AlecDong/APS360-Project"
        },
        {
            title: "Project 2",
            description: "This is another project",
            link: "https://www.google.com"
        },
        {
            title: "Project 3",
            description: "This is another project",
            link: "https://www.google.com"
        },
        {
            title: "Project 4",
            description: "This is another project",
            link: "https://www.google.com"
        }
    ];

    return (
        <div className="App">
        <header className="App-header">
        </header>
        <>
            {projects.length > 0 ? (<Projects projects={projects} />) : (<p>No projects</p>)}
        </>
        </div>
    );
}

export default App;
