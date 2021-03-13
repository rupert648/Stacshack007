import React, { useState, useEffect } from 'react';

import './feedItem.css'

function FeedItem(props) {
    return (
        <div className="courses-container">
            <div className="course">
                <div className="course-preview">
                    <img height="100px" src={props.marker.urlToImage}></img>
                    <h6>{props.marker.sourceInfo.name}</h6>
                    <h2>{props.marker.title}</h2>
                    <a href={props.marker.sourceInfo.url}>Website <i className="fas fa-chevron-right"></i></a>
                </div>
                <div className="course-info">
                    <h6>{props.marker.publishedAt}</h6>
                    <h3>{props.marker.content}</h3>
                    <a href={props.marker.url} className="btn">Read More...</a>
                </div>
            </div>
        </div>

    )
}


export default FeedItem;