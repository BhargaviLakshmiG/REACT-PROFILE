  
import React from 'react'
import hangman from '../Components/public/image/hangman.png';
import nytimes from '../Components/public/image/nytimes.png';
import cricket from '../Components/public/image/cricket.jpg';





const Portfolio = () => {
        return (
            
            <section className="projects">
                  <h1 id='Portfolio'>Projects</h1>
                  <p></p>

                    <div className="container">
                            <a href="https://typescript-cricket.netlify.app/"><img src={cricket} width="200" height="200" alt="Cricket"/><p>Cricket Game</p></a>
                            <a href="https://github.com/BhargaviLakshmiG/Hackathon-1"><img src={hangman} width="200" height="200" alt="hangman"/><p>HangMan game designed with basic java script</p></a>
                        <a href="https://bhargavi-newyork-times-api.netlify.app"><img src={nytimes} width="200" height="200" alt="NYTimes"/><p>Getting latest news from NewYork Times API</p></a>
                    </div>

                

                       
            </section>
        )
    }


export default Portfolio