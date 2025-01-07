import "./ProfileStyles.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Profile() {
    return (
        <div id="info"> 
            <h1>David Harianto</h1>
            <div id="text">
                <h2>Software Developer •</h2>
                <h2>Computer Science Student</h2>
            </div>
            <img id="portrait" src="photo.jpg"></img>
            <div id="icons">
                <a href="https://github.com/david44868"><FaGithub size="4em"/></a>
                <a href="https://www.linkedin.com/in/david-harianto/"><FaLinkedin size="4em"/></a>
            </div>
        </div>
    );
}

export default Profile;