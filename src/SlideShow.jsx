/* //SlideShow.js
import React, { useState, useEffect } from 'react';
import './SlideShow.css';

const Slideshow = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToNextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	const goToPreviousSlide = () => {
        alert("ok)")
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	useEffect(() => {
		const intervalId = setInterval(goToNextSlide, 3000);

		return () => clearInterval(intervalId);
	}, [images.length]);

	return (
		<div className="slideshow-container">
			<h2>
				Geeksforgeeks Slideshow Component with
				useEffect and useState
			</h2>
			<br />
			<img
				src={images[currentIndex]}
				alt={`Slide ${currentIndex}`}
				className="slideshow-image"
			/>
			<div className="slideshow-buttons">
				<button onClick={goToPreviousSlide}>Previous</button>
				<button onClick={goToNextSlide}>Next</button>
			</div>
		</div>
	);
};

export default Slideshow; */

/* import React, { useState } from "react";
import { Slide, Button } from "@mui/material";

function SlideExample() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button onClick={() => setShow(!show)}>Toggle Slide</Button>
      <Slide direction="left" in={show} mountOnEnter unmountOnExit>
        <div style={{ padding: 20, background: "#f0f0f0" }}>Sliding Content</div>
      </Slide>
      <Slide direction="left" in={show} mountOnEnter unmountOnExit>
        <div style={{ padding: 20, background: "#bb3232ff" }}>Sliding Content</div>
      </Slide>
    </div>
  );
}

export default SlideExample;
 */
/*
import React, { useState, useEffect } from "react";
import "./SlideShow.css"; // Import CSS file

const SlideAnimationTimerCSS = () => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [isRunning, setIsRunning] = useState(true);
const [isVisible1, setIsVisible1] = useState(true);
const [isVisible2, setIsVisible2] = useState(false);
const [animate, setAnimate] = useState(false);
const [animate2, setAnimate2] = useState(false);

const toggleClass = () => {

    if(isVisible1) {
        setAnimate(true);

        const timer = setTimeout(() => {
            setIsVisible1(false);
            setIsVisible2(true);
        }, 1000);
    }
   

  };

  return (
    <div className="timer-container">
      <div
        className={`${["timer-box"]} ${isVisible1 ? "show" : "hide"} ${animate ? "slide" : "show"}`}
      >
        {timeLeft}s11
      </div>

      <div
        className={`${["timer-box"]} ${isVisible2 ? "show" : "hide"} ${animate2 ? "slide" : "show"}`}
      >
        {timeLeft}s22
      </div>
      <button onClick={toggleClass}>
      Toggle Class</button>
    </div>
  );
};

export default SlideAnimationTimerCSS;
*/

import React, { useState, useEffect } from "react";
import styles from './CSS/styling.module.css'
import quotesImage from './assets/Images/pattern-quotes.png'
import patternBGImage from './assets/Images/pattern-bg.png'
import tanyaImage from './assets/Images/image-tanya.jpg'
import previousImage from './assets/Images/icon-prev.png'
import nextImage from './assets/Images/icon-next.png'
import johnImage from './assets/Images/image-john.jpg'

const SlideAnimationTimerCSS = () => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [isRunning, setIsRunning] = useState(true);
const [isVisible1, setIsVisible1] = useState(true);
const [isVisible2, setIsVisible2] = useState(false);
const [animate, setAnimate] = useState(false);
const [animate2, setAnimate2] = useState(false);

  const SliderAnimate = () => {
    debugger;
    if(isVisible1) {
        setAnimate(true);

        const timer = setTimeout(() => {
            setIsVisible1(false);
            setIsVisible2(true);
        }, 1000);
    }
   

  };

  return (
    <section id={`${styles["main"]}`}>
        <div  className={`${styles["slider"]} ${styles["slide"]}`}>
          <div className={`${styles["description"]}`}>
            <div className={`${styles["img-div"]}`}>
              <img src={quotesImage} alt="quote" />
            </div>
            
            <p className={`${styles["darkfont"]} ${styles["comments"]}`}>
              “ I’ve been interested in coding for a while but never taken the jump, until now. 
              I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
              excited about the future. ”
            </p>
    
            <div className={`${styles["title"]}`} >
              <span className={`${styles["darkfont"]}`}>
                Tanya Sinclair
              </span>
              <span className={`${styles["lightfont"]}`}>
                UX Engineer
              </span>
            </div>
          </div>
          <div className={`${styles["picture"]}`}>
            <div className={`${styles["background-picture"]}`}>
              <img src={patternBGImage} className={`${styles["background"]}`} alt="pattern" />
            </div>
            <div className={`${styles["person"]}`}>
              <img src={tanyaImage} className={`${styles["person"]}`} alt="tanya" />
            </div>
            <div className={`${styles["icons"]}`}>			
              <a ><img src={previousImage} alt="previous" /></a>
              <a onClick={SliderAnimate}><img src={nextImage} alt="next" /></a>				
            </div>
          </div>
        </div>		
        
       <div className={`${styles["hide"]}`}>
          <div className={`${styles["description"]}`}>
            <div className={`${styles["img-div"]}`}>
              <img src={quotesImage} alt="quotes" />
            </div>
            <p className={`${styles["darkfont"]} ${styles["comments"]}`}>
               “ If you want to lay the best foundation possible I’d recommend taking this course. 
              The depth the instructors go into is incredible. I now feel so confident about 
              starting up as a professional developer. ”
            </p>
    
            <div className={`${styles["title"]}`}>
              <span className={`${styles["darkfont"]}`}>
                John Tarkpor
              </span>
              <span className={`${styles["lightfont"]}`}>
                Junior Front-end Developer
              </span>
            </div>
          </div>
          <div className={`${styles["picture"]}`}>
            <div className={`${styles["background-picture"]}`}>
              <img src={patternBGImage} className={`${styles["background"]}`} alt="john" />
            </div>
            <div className={`${styles["person"]}`}>
              <img src={johnImage} className={`${styles["person"]}`} alt="john" />
            </div>	
            <div className="icons">			
              <a className={`${styles["prev-button"]}`}><img src={previousImage} alt="previous" /></a>
              <a className={`${styles["next-button"]}`}><img src={nextImage} alt="next" /></a>				
            </div>
          </div>
        </div> 
    
        
      </section>
  );
};
export default SlideAnimationTimerCSS;
