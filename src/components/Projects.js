import "./ProjectsStyles.css";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Projects() {
  return (
    <div id="list">
        <h1>Projects</h1>
        <div id="box">
            <div className="project-card">
                <img className="proj" src="proj1.png"></img>
                <div className="description">
                    <p className="title">Task Manager</p>
                    <p>Allows for a user to create and save tasks for easy organization</p>
                    <a href="https://github.com/david44868/Tasks-Manager"><FaGithub size="4em"/></a>
                </div>
            </div>
            <div className="project-card">
                <img className="proj" src="proj2.png"></img>
                <div className="description">
                    <p className="title">RU Living</p>
                    <p>Helps simplify dormitory selection for Rutgers students</p>
                    <a href="https://github.com/Jobansin/RU_Living"><FaGithub size="4em"/></a>
                </div>
            </div>
            <div className="project-card">
                <img className="proj" src="proj3.png"></img>
                <div className="description">
                    <p className="title">Quiz Quest</p>
                    <p>A fun short quiz game that uses the echo3D API to show interactive 3D results.</p>
                    <a href="https://github.com/echo3Dco/echo3D-Demo"><FaGithub size="4em"/></a>
                </div>
            </div>
            <div className="project-card">
                <img className="proj" src="proj4.png"></img>
                <div className="description">
                    <p className="title">Seasonal Anime List</p>
                    <p>Generates a list of anime for a selected season and year using the MyAnimeList API</p>
                    <a href="https://github.com/david44868/Top_Seasonal_Animes"><FaGithub size="4em"/></a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Projects;
