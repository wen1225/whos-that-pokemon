import React, { useState } from 'react';
import './displayBar.css';
import './popup.css';

function Popup(props) {
    const { pokemon, onClose, text, backgroundColor } = props;
  
    return (
      <div className="popup" style={{ backgroundColor: backgroundColor }}>
        
        <h3> {text}</h3>
        
        
      </div>
    );
  }

  export default Popup;