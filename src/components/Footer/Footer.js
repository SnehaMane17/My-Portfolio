import React from "react";
import './Footer.css'

const Footer = () => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    return(
        <div className="footer">
            <h5>Desinged and developed by sneha marathe</h5>
            <h5>Copywrite <span>&copy;</span> {currentYear}</h5>
        </div>
    )
}

export default Footer