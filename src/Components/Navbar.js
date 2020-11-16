import React from 'react'
import './css/Main.css'


const Navbar = () => {
        return (
            <nav className="navbar">
                <a href="#home"><i className="fa fa-fw fa-home"></i>Home</a> &nbsp;
                <a href="#container-about"><i className="fa fa-fw fa-user"></i>About</a> &nbsp;
                <a href="#skillheader"><i class="fas fa-tasks"></i>Skills</a> &nbsp;
                <a id="protofolio-link" href="#Portfolio"><i className="fa fa-github-alt"></i>Projects</a> &nbsp;
                <a href="#contactnav"><i className="fa fa-fw fa-envelope"></i>Contact</a> &nbsp;
            </nav>
        )
    }


export default Navbar