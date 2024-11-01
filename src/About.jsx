import React, { useState, useEffect } from 'react';
import cv from './assets/ishika resume.pdf'

function About() {
  const [eduData, setEduData] = useState([]);

  useEffect(() => {
    const data = [
      {
        course: "Bachelors of Computer Applications",
        institute: "Vivekananda Institute of Professional Studies",
        marks: "9.1 CGPA"
      }
    ];
    setEduData(data);
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <section className="about" id='about'>
      <h1>ABOUT</h1>
      <p>
        I am an experienced web developer with a strong background in building dynamic, user-friendly websites and applications. 
        My expertise in front-end and back-end technologies, along with a proven ability to solve problems and optimize performance, 
        ensures I can deliver high-quality results. I'm passionate about staying up-to-date with the latest trends and am confident 
        I can contribute effectively to your team's success.
      </p>

      <h3>Education</h3>
      <div id="eduData">
        {eduData.map((x, index) => {
          let { course, institute, marks } = x;
          return (
            <div key={index}>
              <div>{course}</div>
              <div>{institute}</div>
              <div>{marks}</div>
            </div>
          );
        })}
      </div>

     
      <div style={{color:'lavender', marginLeft:'15%' , fontSize:'16pt' ,marginBottom:'2rem'}} id="cv"> Download Resume : <a href={cv} download id="resume"> My Resume</a> </div>
    </section>
  );
}

export default About;