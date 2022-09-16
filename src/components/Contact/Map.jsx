import React from 'react';
import "./Contact.css";

const Map = () => {
    return (
        <div className='map-content'>
            {/* eslint-disable-next-line */}
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.381222035278!2d3.2538430141563754!3d6.473301895317076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8770a25206ff%3A0xe6c031f3c72cccde!2sAbule%20Ado!5e0!3m2!1sen!2sng!4v1663147238634!5m2!1sen!2sng" width="100%" loading="lazy" height="450" style={{border:0}}></iframe>   
        </div>
    );
};

export default Map;