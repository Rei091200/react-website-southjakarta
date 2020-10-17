import React from 'react';
import '../../App.css';
import '../Food.css'

function food() {
    return (
        <div className='food-container'>
            <video src='/videos/video-4.mp4' autoPlay loop /> 
            <h1>Food!</h1>
            <p>Various foodies from all of Indonesia gathered here!</p>
            <p>The video in the background is showing you various of culinary stuff in South Jakarta!</p>
        </div>
    )
}

export default food
