import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Css/ImageCss.css';
import Background from '../Image/Background.jpeg';
import pari from '../Image/pari.jpg';

class AboutUs extends Component {
    render() {
        return (
            <div class="div-main" >
               <div class="div-image">
                <img className='Image-Size' src={pari}></img>
                </div>
                <div class= "div-content">
                <h1>This is a site which is a small example of my skills and also
                    of my intrests combined.</h1>
                <h2>I am a baby developer who is trying to expand my horizon and 
                    include my interests into it. </h2>
                
                <h2>This is Parinati Deshmukh. I am very interested in books and
                    crochet. So this site will work as site for me to express my book 
                    craze with different things like bookblogs, book summaries and 
                    everything else i can think of.
                    I am not very in tune with the current trend as I am focusing 
                    on different programming languages and softwares also.
                </h2>
                </div>
            </div>
            
        )
    }
}

export default AboutUs;
