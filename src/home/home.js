import "./home.css"
import 'primeicons/primeicons.css';
import myImage from "./myImage-3.png";

export default function Home() {
  return (
    <>
      <div id="container-1">
        <div id="content">
          <div id="left-content">
            <h1 className="h1Text">Welcome,<br/> I'am <span className="name">Amalraj</span></h1>
            <h1 className="h1Text" id="anim">Front-End Developer</h1>
            <p className="quote">"Your Future is Created by What You Do Today Not Tomorrow!"</p>
            <div id="icons">
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-regular fa-envelope"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div id="right-content">
            <div className="circle">
              <div className="circle-2">
              <img src={myImage} id="myImage"/>
              </div>
            </div>
          </div>

        </div>

      </div>

    </>
  )
}

