import React, {useEffect} from 'react'
import "./work.scss";
import img1 from "../../images/work1.png";
import img2 from "../../images/work2.png";
import img3 from "../../images/work3.png";
import gsap from "gsap";
const Work = () => {
    useEffect(() => {
        const timeline =gsap.timeline();
        timeline.from(".workWrapper .workItem", {y:200, opacity:0, stagger:.33});
     }, [])
    return (
        <div className="work center-elements" id="work">
            <div className="workWrapper">
                <div className="workItem">
                    <div className="imgContainer"><a href="https://ayoubeouato.netlify.app/"><img alt="barber site" src={img3} /></a></div>
                    <div className="normalTitle"><h1>barber site</h1></div>
                    <p>this is beautiful barber site.</p>
                </div>
                <div className="workItem">
                    <div className="imgContainer"><a href="https://aextralook.netlify.app/"><img alt="commerce" src={img1} /></a></div>
                    <div className="normalTitle"><h1>simple Commerce site</h1></div>
                    <p>creative Commerce website use commercejs library .</p>
                </div>
                <div className="workItem">
                    <div className="imgContainer"><a href="https://portfolio00.netlify.app/"><img alt="portfolio" src={img2} /></a></div>
                    <div className="normalTitle"><h1>Portfolio</h1></div>
                    <p>this fist portfolio :)</p>
                </div>
            </div>
        </div>
    )
}

export default Work
