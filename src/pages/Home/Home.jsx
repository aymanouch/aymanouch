import React, {useEffect} from 'react'
import "./home.scss";
import gsap from 'gsap';
const Home = () => {
    useEffect(() => {
       const timeline =gsap.timeline();
       timeline.from(".homeWrapper .itemGrid", {y:200, opacity:0});
    }, [])
    return (
        <div className="home center-elements" id="home">
            <div className="homeWrapper">
                <div className="itemGrid">
                    <div className="letterTitle">
                        <h1 className="bigTitleImage">A</h1>
                    </div>
                    <h1 className="normalTitle">Ayman ouchedih</h1>
                    <p>
                        my name is ayman ouchedih I am a front-end developer and I have 5 years experience.
                    </p>
                </div>
                <div className="itemGrid">
                    <div className="letterTitle">
                        <h1 className="bigTitleImage">O</h1>
                    </div>
                    <h1 className="normalTitle">Our work</h1>
                    <p>
                        I design creative website and web application
                        and we develope this app for you.
                    </p>
                </div>
                <div className="itemGrid">
                    <div className="letterTitle">
                        <h1 className="bigTitleImage">W</h1>
                    </div>
                    <h1 className="normalTitle">Who am I ?</h1>
                    <p>
                    I like to code things from dribbble, and enjoy bringing ideas to life in the browser.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
