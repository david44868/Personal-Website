import "./ProfileStyles.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Profile() {
    return (
        <div id="info"> 
            <h1>David Harianto</h1>
            <h2>Software Developer • Computer Science Student </h2>
            <img id="portrait" src="photo.jpeg"></img>
            <div id="icons">
                <a href="https://github.com/david44868"><FaGithub size="4em"/></a>
                <a href="https://www.linkedin.com/in/david-harianto-c0mp5c1/"><FaLinkedin size="4em"/></a>
            </div>
        </div>
    );
}

export default Profile;