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
                    <p className="title">Water Tracker</p>
                    <p>Helps users to keep track of much water they're drinking daily</p>
                    <a href="https://github.com/david44868/Daily-Water-Intake-Tracker"><FaGithub size="4em"/></a>
                </div>
            </div>
            <div className="project-card">
                <img className="proj" src="proj3.png"></img>
                <div className="description">
                    <p className="title">Hangman</p>
                    <p>Worked in a team of 3 to create a web app of Hangman that includes different modes of play</p>
                    <a href="https://github.com/gavsidhu/Hangman"><FaGithub size="4em"/></a>
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
