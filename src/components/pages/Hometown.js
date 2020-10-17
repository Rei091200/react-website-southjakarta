import React from 'react';
import '../../App.css';
import '../Hometown.css'

function hometown() {
    return (
        <div className='hometown-container'>
            <video src='/videos/video-3.mp4' autoPlay loop/>
            <h1>This is my HOMETOWN!</h1>
            <p>One of the most crowded city in DKI Jakarta, filled by a lot of cafe and some great place to hangout!</p>
            <p>The video in the background is one of the famous place in South Jakarta</p>
            <p>It's Little Tokyo in Blok M!</p>
        </div>
    )
}

export default hometown
