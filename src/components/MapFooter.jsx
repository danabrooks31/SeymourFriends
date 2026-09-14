import React from 'react';

const MapFooter=()=>{
    return (
    <div className="map-footer-container">
      <iframe
        src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6459.6939427775005!2d-79.0661764243315!3d35.950713272501446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acdd26dd8746e5%3A0xe7368cec486f97d2!2sSeymour%20Center!5e0!3m2!1sen!2sus!4v1774723374825!5m2!1sen!2sus"
        width="100%"
        height="256"
        style= {{border:0}}
        allowFullScreen= ""
        loading= "lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Our Location"
      ></iframe>
    </div>
    ); 
};

export default MapFooter
