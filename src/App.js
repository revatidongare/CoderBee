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

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar/>
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
       
    </div>
  );
};

export default App;
