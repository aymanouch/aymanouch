import React from 'react';
import "./navbar.scss";
import gsap  from "gsap";
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar center-elements" id="navbar">
            <div className="navbarWrapper">
                <div className="logo">AY</div>
                <div className="listLinks"  id="menu">
                    <ul>
                        <li><Link to="/" className="active" onClick={(e)=> clickOnLinks(e)}>Home</Link></li>
                        <li><Link to="/work" onClick={(e)=> clickOnLinks(e)}>Works</Link></li>
                        <li><Link to="/about" onClick={(e)=> clickOnLinks(e)}>About</Link></li>
                        <li><Link to="/contact" onClick={(e)=> clickOnLinks(e)}>Contact</Link></li>
                    </ul>
                    <div className="closeIcon" onClick={()=> showMenu("close")}><i className="fas fa-times"></i></div>
                </div>
                <div className="menuIcon" onClick={()=> showMenu("open")}><i className="fas fa-bars"></i></div>
            </div>
        </div>
    )
}
function showMenu(doWhat) {
    const timeline = gsap.timeline();
    if(doWhat==="open") {
        timeline.to("#menu", {display:"block", clipPath:'circle(100% at 100%)', opacity:1})
        .from("#menu li", {x:-50, opacity:0, stagger:.25}, "-=.5");
    } else{
        timeline.to("#menu li", {x:50, opacity:0, stagger:.25})
        .to("#menu", {opacity:0, clipPath:'circle(50% at 30% 5%)'}, "-=.5")
        .to("#menu", {display:"none"})
        .to("#menu li", {opacity:1, x:0}, "-=1");
    }
}
function clickOnLinks(e) {
    let getSiblings = function (elt) {
        // for collecting siblings
        let siblings = []; 
        // if no parent, return no sibling
        if(!elt.parentNode) {
            return siblings;
        }
        // first child of the parent node
        let sibling  = elt.parentNode.firstChild;
        
        // collecting siblings
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== elt) {
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling;
        }
        return siblings;
    };
    if(e.target.classList.contains("active")) {
        if(window.innerWidth < 780) showMenu('close');
        return;
    } else{
       e.target.classList.toggle("active");
       const siblings=getSiblings(e.target.parentElement);
       for(let i=0; i<siblings.length; i++)  siblings[i].firstChild.classList.remove("active");

    }
    if(window.innerWidth < 780) {
        showMenu('close');
    }
}
export default Navbar
