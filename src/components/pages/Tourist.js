import React from 'react';
import '../../App.css';
import '../Tourist.css'

function tourist() {
    return (
        <div className='tourist-container'>
             <video src='/videos/video-5.mp4' autoPlay loop />
            <h1>Tourist!</h1>
            <p>You can't take your eyes off from this!</p>
            <p>Yeah, words can't explain how beautiful South Jakarta is.</p>
            <p>This place in the video is one of the busiest place in here, SCBD.</p>
        </div>
    )
}

export default tourist
