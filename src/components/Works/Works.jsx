import React from 'react'
import './Works.css';
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from "framer-motion"
import { Link } from 'react-scroll';

const Works = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
  
  return (
    <div className="works" id='Works'>
         <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>Works for All these</span>
            <span>Brands &  Clients</span>
            <span>
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
              <br /> quae quam sed dolores vero tenetur!
              <br />
              Lorem ipsum dolor sit amet.
              <br />
              Lorem ipsum dolor sit amet.
              <br /> */}
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, */}
            </span>
            
            <Link spy={true} to="Contact" smooth={true}>
                <button className="button s-button">Hire Me</button>
            </Link>
            
            <div className="blur s-blurl" style={{ background: "#ABF1FF94"}}></div>
        </div>

       {/* right side */}
       <div className="w-right">
        <motion.div
            initial={{rotate: 45 }}
            whileInView={{rotate: 0}}
            viewport={{margin: '-40px'}}
            transition={{duration: 3.5, type: 'spring'}}        
            className="w-mainCircle">
            <div className="w-secCircle">
                <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Fiverr} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Facebook} alt="" />
            </div>
        </motion.div>
        {/* background Circles */}
        <div style={{color: darkMode? 'white': ''}} className="w-backCircle blueCircle"></div>
        <div style={{color: darkMode? 'blue': ''}} className="w-backCircle yellowCircle"></div>
       </div>
    </div>
  )
}

export default Works
