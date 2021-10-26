import React from 'react';
import "./contact.scss";
import emailjs from "emailjs-com";
import { useHistory } from 'react-router';
const Contact = () => {
   let history = useHistory();
   function sendData(e) {
        e.preventDefault();
        //function send data to google sheets file
        const username=document.getElementById("nameId");
        const lookForWhat= document.getElementById("selectId");
        const email= document.getElementById("emailId");
        console.log(email.value)
        console.log(username.value)
        if(email.value!==undefined && username.value!==undefined ) {
            if(email.value.length >2 && username.value.length >2) {
                emailjs.send(process.env.REACT_APP_SERVICE,process.env.REACT_APP_TEMPLATE, {
                    name: username.value,
                    whatYouWant: lookForWhat.value,
                    emailPhone: email.value,
                    reply_to: "aymanouchedih000@gmail.com",
                    },process.env.REACT_APP_USER);
                    history.push("/");

            } else {
                if(email.value < 3 ) email.style.borderColor="red";
                if(username.value <3) username.style.borderColor = "red";
             }  
            
        }      
    }
    return (
        <div className="contact center-elements" id="contact">
            <div className="contactWrapper">
                <h3>/ Get in touch</h3>
                <h1>Schedule an Appointment</h1>
                <form>
                    <div className="globalMessage">
                        <span>Hey, my name is </span> <input type="text" placeholder="Type Here" id="nameId"/>
                        <span> and I'am looking for </span>
                        <select id="selectId">
                            <option>developer</option>
                            <option>designer</option>
                        </select><span> Get in touch with me at </span>
                        <input type="text" placeholder="Your Email or phone" id="emailId"/>!
                    </div>
                    <button onClick={(e)=> sendData(e)}> send email <i className="fas fa-long-arrow-alt-right"></i></button>
                </form>
            </div>
        </div>
    )
}


export default Contact
