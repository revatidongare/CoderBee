import React from "react";
import "./App.css";

import { Parallax } from 'react-parallax';
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from "./components/title-message/title-message.component";

import Skills from "./pages/skills/skills.components";
import About from "./pages/about/about.component";
import Container from "react-bootstrap/Container";
import Slide from 'react-reveal/Slide';
import Fade from "react-reveal/Fade";
import Experience from "./pages/experience/experience.compnent";
import Contact from "./pages/contact-form/contact-form.component";
import Footer from "./components/footer/footer.component";
import ProjectTimeline from './components/projects-timeline/projects-timeline.component';
import Particles from 'react-particles-js';
import { particlesOptions } from "./particlesOptions";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar/>
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
      
      <MyCarousal/>
      <TitleMessage/>
      <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('./assets/img/parallex/background.png')}
        bgImageAlt=""
        strength={-200}
    >  
            <Container className="container-box rounded">
              <Fade duration={500}>
              <About/>
              </Fade>
            </Container>
              
        </Parallax>
      
      </div>    
      {/* skills */}
      <div>
            <Container className="container-box rounded">
              <Slide bottom duration={500}>
                <hr />
              <Skills/> 
              </Slide>
            </Container>
            
      </div> 
      {/* experience */}
      <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <hr />
              <Experience/> 
              </Fade>
            </Container>
            
      </div>

      {/* Proj */}
      <div>
            <Container className="container-box rounded">
              <Slide bottom duration={500}>
                <hr />
              <ProjectTimeline/> 
              </Slide>
            </Container>
            
      </div> 
       {/* contact */}
      <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <hr />
              <Contact/> 
              </Fade>
            </Container>
            
      </div>

      <hr />
      <Footer/>
    </div>
  );
};

export default App;
