import React, { useState, useEffect } from 'react'; 
import './feedItem.css';

function HoverOver(props) {
  return(
    <div class="popup">
        <div class="popup-info">
            <h6>{props.marker.publishedAt}</h6>
            <h2>{props.marker.title}</h2>
            <h3>{props.marker.content}</h3>
            <a href={props.marker.url} class="btn">Read More...</a>
        </div>
    </div>
  );
}

export default HoverOver;