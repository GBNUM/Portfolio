import React, {useState, useEffect} from "react";
import "./../App.css";
import gojo from '/gogogo.png'
import fb from '/image/fb.png'
import github from '/image/github.png'
import telegram from '/image/telegram.png'
import linkedin from '/image/linkedin.png'
import  jk  from "/jk.png";
import './../css/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import geto from '/geto.png'
import { About } from "./About";
import { Skills } from "./Skills";

const Home = () => {

  const [isOpen, setIsOpen] = useState(true);

  const close = () => {
    const navbar = document.querySelector(".navbody")
  const icons_txt = document.querySelectorAll("a span")
  const hand = document.querySelector(".hand")
  const geto = document.querySelector(".geto")
    if(isOpen){
      console.log("close")
      navbar.style.cssText = "padding: 0 20px"
     
    icons_txt.forEach(span => {
      span.style.display = "none";
    });
    hand.style.cssText = "top: 80px; transition: 0.5s"
        geto.style.cssText = "right: 0; transition: 0.5s"
  setIsOpen(!isOpen)
    }
  else{
     console.log("open")
      navbar.style.cssText = "   padding: 0 50px 0 20px"
      setIsOpen(!isOpen)
         
    icons_txt.forEach(span => {
      span.style.display = "flex";
      hand.style.cssText = "top: 120px;   transition: 0.5s"
      geto.style.cssText = "right: -100%; transition: 0.5s"


    });
  
  }
    }

    
  return (
    <div className="flex body">
      <div>
      <div className="navbody min-h-screen w-fit overflow-hidden flex  ">

<div className="flex flex-col gap-7 w-fit mt-10   link ">
<button className="link flex start" onClick={close}><FontAwesomeIcon icon={faArrowLeft} /></button>
<a className="mt-30 "><FontAwesomeIcon icon={faHouse} /> <span>Home </span></a>
<a><FontAwesomeIcon icon={faUserTie} /> <span>About</span></a>
<a><FontAwesomeIcon icon={faComputer} /> <span>Skills</span></a>
<a><FontAwesomeIcon icon={faListCheck} /> <span>Projects</span></a>
<a><FontAwesomeIcon icon={faEnvelope} /> <span>Contact</span></a>
</div>
</div>
      </div>
      <main className="ml-40">
    <div className="">
      <div className="ml-20">

        <div>
        <img src={gojo} alt="" className="w-100  mt-20 head"/>
        <img src={jk} alt="" className="w-100 absolute top-12 hand"/>

        <div>
          <img src={geto} alt="" className="w-100 absolute geto" />
        </div>
        </div>
       
        <h1 className=" text-xl font-bold text-gray-300 flex items-end z-10 relative">Hi, I am <p className="ml-3 text-3xl pink">Gojo Satoru</p></h1>
        <h1 className=" text-2xl font-bold flex items-end text-gray-300">I am a <p className="ml-3 text-8xl pink">JujuTsu Sorcerer</p></h1>


<div className="flex gap-5 mt-8">

<button className=""><a href="" className="px-10 py-3    btn blue text-xl">Download CV</a></button>
<button className=""><a href="" className="px-10 py-3    btn blue text-xl">Read more</a></button>
  </div>
  <div className="mt-6 flex gap-4 icons">
      <a href="" className="mt-5 " style={{ "--i": 1}}><img src={fb} alt="" className="w-10"/></a>
      <a href="" className="mt-5"  style={{ "--i": 3 }}><img src={telegram} alt="" className="w-10"/></a>
      <a href="" className="mt-5"  style={{ "--i": 5 }}><img src={linkedin} alt="" className="w-10"/></a>
      <a href="" className="mt-5 bg-white rounded-xl "  style={{ "--i": 7 }}><img src={github} alt="" className="w-10"/></a>

    </div>  
      </div>
    
    </div>
  


  <div className="mt-50">
    <About></About>
  </div>

  <div className="mt-50">
    <Skills></Skills>
  </div>
      </main>     
    </div>
  );
};

export default Home;
