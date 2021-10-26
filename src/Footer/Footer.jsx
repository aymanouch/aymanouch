import React from 'react'
import "./footer.scss";
const Footer = () => {
    return (
        <div className="footer center-elements" id="footer">
            <div className="footerWrapper">
                <div className="emailContact"><i className="far fa-envelope"></i> aymanouchedih000@gmail.com</div>
                <div className="socialContact">
                    <ul>
                        <li className="iconSocial"><a href="https://www.facebook.com/ayman.js.925/"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="iconSocial"><a href="https://instagram.com/aymanouc"><i className="fab fa-instagram"></i></a></li>
                        <li className="iconSocial"><a href="https://www.linkedin.com/in/ayman-ayman-206b1318b/"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
