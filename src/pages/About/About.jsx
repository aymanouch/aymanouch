import React from 'react'
import "./about.scss";
const About = () => {
    return (
        <div className="about center-elements" id="about">
            <div className="aboutWrapper">
                <div className="aboutItem firstItem">
                    <div className="letterBigImg">
                        <h1>A.</h1>
                    </div>
                </div>
                <div className="aboutItem">
                    <h1>Who am I ?</h1>
                    <p>
                    my name is ayman ouchedih, I am a web developer, I enjoy Building website or web app. if you need some website or web app for your business you are in the right place just get in touch with me now.
                    </p>
                    <div className="slashStyle"><h1>&#x2f;&#x2f;&#x2f;.</h1></div>
                </div>
            </div>
        </div>
    )
}
export default About
