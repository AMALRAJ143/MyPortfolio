import "./about.css";
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import resume from "./Amalraj resume.pdf";

export default function About() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['HTML', 'CSS', 'JavaScript',"React Js","Node Js","Express Js","Java"],
            datasets: [
                {
                    data: [100, 90, 84,70,50,68,72],
                    backgroundColor: [
                      '#dd4b25', '#254bdd', '#f3d545', '#5ed3f3', '#5ba844', '#606c9a', '#e51f24',
                    ],
                    hoverBackgroundColor: [
                      '#e96228', '#2862e9', '#cfb433', '#087a9f', '#88c249', '#7985b3', '#e74c3c',
                    ]
                }
            ]
        };
        const options = {
            cutout: '60%',
            tooltips: {
              enabled: false, // Set to false to disable tooltips
          },
          legend: {
              display: false, // Set to false to hide the legend
          }
        };
        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
      <>
      <div id="about-container">
        <h1>About</h1>
        <div id="about-content">
          <div id="about-details">
            <p>Hello there! I'm someone who really enjoys making websites. </p><br/>
              <p>I started with the basics like HTML, CSS, and JavaScript, and now I'm into more advanced stuff like React.js and Node.js.</p><br/>
              <p>I've worked on creating cool and responsive websites, and I also know a bit about server-side development using Express.js and Java.</p><br/>
              <p> I like solving problems and learning new things in the tech world. Let's make awesome things together!</p> 
              <a href={resume} target="_blank" className="cv">View CV</a>
              <a href={resume} download="resume.pdf" className="cv">Download CV</a>
          </div>
          <div id="skill-details">
            <div id="chart-container">
              <span className="chart-label">My <br/>Skills</span>
              <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
            </div>
          </div>
        </div>
      </div>
      </>
    )
}
        