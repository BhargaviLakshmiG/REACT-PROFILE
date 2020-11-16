import React, { Component } from 'react'

import jsimg from '../Components/public/image/javascriptimg2.png'
import htmlimg from '../Components/public/image/html5logo.jpg'
import cssimg from '../Components/public/image/csslogo.png'
import mongoimg from '../Components/public/image/mongodbimg.png'
import sqlimg from '../Components/public/image/sqllogo.png'





const Skills = () => {
        return (
       
            <section id="skillheader" className="flex-project-container">

                    <div><img src={jsimg} width="100" height="100" alt="js"/></div>
                    <div><img src={htmlimg} width="100" height="100" alt="html"/></div>  
                    <div><img src={cssimg} width="100" height="100" alt="css"/></div>
                    <div><img src={mongoimg} width="100" height="100" alt="mongodb"/></div>  
                    <div><img src={sqlimg} width="100" height="100" alt="db"/></div>
                
            </section>
        )
    }


export default Skills