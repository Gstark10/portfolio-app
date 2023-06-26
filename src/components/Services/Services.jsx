import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Card from '../Card/Card'
import Glasses from "../../img/glasses.png";
// import Humble from "../../img/humble.png";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from "framer-motion"

const Services = () => {
  const transition ={duration : 1, type: 'spring'}
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>

        {/* left side */}
        <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
            <span>services</span>
            {/* <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, <br /> quae quam sed dolores vero tenetur!
              <br />
              Lorem ipsum dolor sit amet.
            </span> */}
            <br />  
            <button className="button s-button">Download CV</button>
            <div className="blur s-blurl" style={{ background: "#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="cards">
          <motion.div 
            whileInView={{left: '14rem'}}
            initial={{left: '25rem'}}
            transition={transition}
          style={{left: '14rem'}}>
            <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={"Figma, Photoshop, Adobe, Coreldraw, Adobe X"}
            />
          </motion.div>

          {/* second card */}
          <motion.div
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
          style={{ top: "12rem" , left: "-4rem"}}>
            <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, Javascript, Reactjs, Nextjs, PHP"}
            />
          </motion.div>

          {/* third card */}
          {/* <motion.div 
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}
          style={{top: "19rem", left: "12rem"}}>
            <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            />
          </motion.div> */}
          <div className="blur s-blur2" style={{ background: "var(--purple)"}}></div>
        </div>
    </div>

  )
}

export default Services
