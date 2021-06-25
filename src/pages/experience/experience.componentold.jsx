import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Tilt from 'react-tilt';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import RIL from "../../assets/img/experience/ril.svg";
import VInnovate from "../../assets/img/experience/vinnovate.png";
import { CardDeck } from 'react-bootstrap';
import "./experience.style.css"
const Experience =() =>{
    return(
        <div id ="experience">
        <h1 className="pt-3 text-center font-details-b pb-3">
        Experience
        </h1>
        <Jumbotron className="jumbo-style">
        <Container>
        <Tilt options={{max:25}}>
        <Card>
        <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
        <Card.Img variant="top" className="img-resize" src={RIL} alt="Accenture logo" />
        </Card.Header>
        <Card.Body className="d-flex justify-content-center flex-column">
        <div>
        <Card.Title className="text-center">Associate Developer</Card.Title>
        </div>
        <div>
        <Card.Text className="text-center style">
        <strong className="body-title-style ">SAP Developer</strong>
        <br />
        <strong>Technology:</strong> SAP ABAP
        <br />
        <strong>Duration:</strong> July 2017 - May 2018
        <br/>
        <strong> Description </strong>
        <ul className="text-left">
        <li><strong>Developed &amp; enhanced</strong> reports and sales orders using SAP-ABAP T-Codes, RFC’s. </li>
        <li><strong>Worked on</strong> Change Request A03569- CNC Customer registration to handle PAN Card, GST changes  in RFC’s </li>
        <li><strong>Developed</strong> an invoice printing form using Smartforms </li>
        
        </ul>
        </Card.Text>
        </div>
        </Card.Body>
        </Card>
        </Tilt>
        </Container>
        </Jumbotron>
        
        <Jumbotron className="jumbo-style">
        <Container>
        <Tilt options={{max:25}}>
        <Card>
        <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
        <Card.Img variant="top" className="img-resize" src={VInnovate} alt="Accenture logo" />
        </Card.Header>
        <Card.Body className="d-flex justify-content-center flex-column">
        <div>
        <Card.Title className="text-center">Product Engineer</Card.Title>
        </div>
        <div>
        <Card.Text className="text-center style">
        <strong className="body-title-style ">vInnovate Techologies</strong>
        <br />
        <strong>Technology:</strong> React JS, HTML, CSS,Bootstrap, Javascript, MS-SQL, PHP
        <br />
        <strong>Duration:</strong> June 2019 - Oct 2020
        <br/>
        <strong> Description </strong>
        <ul className="text-left">
            <li>Worked on unboxkidz which is key that unlocks the huge potential to kids possess</li>
            <li>Leaded vSelfLearn and assisted in development of vEngineering  which provides study material along with MCQ test to school kids &amp; engineering students respectively.</li>
            <li>Developed and Deployed vBill Application to Generate Bill Print and Save in PDF format</li>
            <li>Developed E-commerce module for Augmented Foods </li>
        <li><strong>Developed and Optimized websites:</strong></li>
        <li>
        www.vselflearn.vinnovatetechnologies.com | vselflearn-engineering.vinnovatetechnologies.com
        www.kvnedu.in | www.vinnovatetechnologies.com/vinnovate | www.global-infotech.net
        </li>
        
        {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
        
        </ul>
        </Card.Text>
        </div>
        </Card.Body>
        </Card>
        </Tilt>
        </Container>
        </Jumbotron>
        </div>
        )
    }
    export default Experience;