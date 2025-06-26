import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Aboutcard ({ darkMode, toggleDarkMode }){
    return(
        <Card className="quote-card-view pink-card">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! My name is Beatriz Navas and I am a student at the University of Central Florida, Go Knights!
            <br /> <br />
            Being a computer engineering student has allowed me to dive into a wide range of areas, from embedded software to full stack development.
            <br />
            <br />
            I spend most of my free time learning new programming languages, frameworks, and tools, as well as contributing to exciting, open-source projects!
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Going to the beach
            </li>
          </ul>
          <footer className="blockquote-footer">Ginni Rometty</footer>
        </blockquote>
      </Card.Body>
    </Card>
    );
}