import { useState } from "react";
import "./project.css";

export default function Projects() {
  const [textBox, setTextBox] = useState(false);

  const textBoxOpen = (id) => {
    setTextBox({ ...textBox, [id]: true });
  }
  const textBoxClose = (id) => {
    setTextBox({ ...textBox, [id]: false });
  }

  return (
    <>
      <div id="project-container">

        <h1>Projects</h1>
        <div id="project-inner">
          <div className="projects">
            {
              textBox["p1"] === true ?
                <div className="project-content">
                  <div className="project-head">
                    <h3>project 1</h3>
                    <div>
                      <span onClick={() => textBoxClose("p1")}><button ><i class="fa-solid fa-caret-up"></i></button></span>
                    </div>
                  </div>
                  <div className="project-details" >
                    <div className="project-img">
                    </div>
                    <div className="project-text">
                        <p>i have used many on this</p>
                        <p>i have used many on this</p>
                        <p>i have used many on this</p>
                        <p>i have used many on this</p>
                        <p className="project-links"><i class="fa-brands fa-github"></i><a href="#" target="blank">project link</a></p>
                    </div>
                  </div>
                </div>
                :
                <div className="project-content">
                  <div className="project-head">
                    <h3>project 1</h3>
                    <div>
                      <span onClick={() => textBoxOpen("p1")}><button ><i class="fa-solid fa-caret-down"></i></button></span>
                    </div>
                  </div>
                </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}
