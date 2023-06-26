import React from 'react'
import './Intro.css';

import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import milligstark from "../../img/milligstark.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import { themeContext } from "../../Context";
import { useContext } from 'react'
import {motion} from 'framer-motion'
import { Link } from "react-scroll";





const Intro = () => {
  

const transition = {duration : 2, type: 'spring'}
const theme = useContext(themeContext)
const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style ={{color: darkMode? 'white': ''}}>Hy! I Am</span>
                <span>Godson 
                <br /> Udechukwu</span>
                <span><h1 className='web-t' style={{color: darkMode? 'white': ''}}>WEB DEVELOPER</h1>With High Level Of Experience In Web Designing And Development, <br />
                Graphics Designer and Tech Enthusiast...</span>

            </div>
            <Link spy={true} to="Contact" smooth={true}>
              <button className="button i-button">Hire me</button>
            </Link>

            
            <div className="i-icons">
              <a href="https://github.com/Gstark10"><img src={Github} alt="" /></a>
              <a href="https://www.linkedin.com/in/udechukwu-godson-71946a280/"><img src={LinkedIn} alt="" /></a>
              <a href="https://www.instagram.com/realmilli.g/"><img src={Instagram} alt="" /></a>
              
              
              
            </div>
            
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={milligstark} alt="" />
            <motion.img
              initial= {{left: "-36%"}}
              whileInView={{left: "-24%"}}
              transition={transition}
              
              src={glassesimoji} alt="" />
            <motion.div
              initial={{top: '-4%', left: '7%'}}
              whileInView={{left: '60%'}}
              transition={transition}

            style={{top:'-1%', left:'60%'}}
            className='floating-div'
            >
              <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>
            <motion.div
              initial={{left: '9rem', top:'21.9rem'}}
              whileInView={{left: '0%'}}
              transition={transition}

            style={{top:'20.9rem',height:'30vh'}}
            className='floating-div'
            >
              <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
            </motion.div>

            {/* blur duvs */}
            <div className="blur" style={{background: "rgb{230 210 255}"}}></div>
            <div className='blur'
            style={{
              background: '#C1F5FF',
              top: '17rem',
              width: '21rem',
              height: '11rem',
              left: '-9rem'
            }}></div>

        </div>
    </div>
  )
}

export default Intro