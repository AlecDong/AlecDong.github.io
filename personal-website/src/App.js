import React from "react";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import HomePage from "./components/HomePage";
import Header from "./components/Header";

function App() {
  const projects = [
    {
      title: "Human Action Recognition",
      description: "This is a project",
      link: "https://github.com/AlecDong/APS360-Project",
      image: "/images/HAR.jpg",
    },
    {
      title: "Project 2",
      description: "This is another project",
      link: "https://www.google.com",
      image: "",
    },
    {
      title: "Project 3",
      description: "This is another project",
      link: "https://www.google.com",
      image: "",
    },
    {
      title: "Project 4",
      description: "This is another project",
      link: "https://www.google.com",
      image: "",
    },
  ];

  return (
    <div className="App">
      <img id="background" src="/images/background.gif" alt=""></img>
      <Header />
      <section id="home">
        <HomePage>Alec Dong</HomePage>
      </section>
      <section id="projects">
        <h1>Projects</h1>
        {projects.length > 0 ? (
          <Projects projects={projects} />
        ) : (
          <p>No projects</p>
        )}
      </section>
      <section id="skills">
        <h1>Skills</h1>
      </section>
      <section id="contact">
        <h1>Contact</h1>
        <ContactForm />
      </section>
    </div>
  );
}

export default App;
