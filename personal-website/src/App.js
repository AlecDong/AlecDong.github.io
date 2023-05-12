import React from "react";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Skills from "./components/Skills";

function App() {
  const projects = [
    {
      title: "Human Action Recognition",
      description: "Using a CNN to classify human actions (PyTorch)",
      link: "https://github.com/AlecDong/APS360-Project",
      image: "/images/HAR.jpg",
    },
    {
      title: "Differential Privacy",
      description: "Exploring different methods of preserving privacy in machine learning",
      link: "https://github.com/NicoleStrel/Deep-Learning-with-Differential-Privacy",
      image: "",
    },
    {
      title: "Connect 4 Community",
      description: "Project for the NSBE2022 hackathon (Python Flask Web App)",
      link: "https://github.com/AlecDong/NSBE2022",
      image: "/images/hands.png",
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
        <Skills />
      </section>
      <section id="contact">
        <h1>Contact</h1>
        <ContactForm />
      </section>
    </div>
  );
}

export default App;
