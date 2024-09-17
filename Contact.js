import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Background from '../Image/Background.jpeg';
import '../Css/PagesCss.css';

class Contact extends Component {
    render() {
        return (
            <div className='contact-image' style={{ backgroundImage:`url(${Background})` }}>
                
                <h1>Contact me through various mediums given below.<br></br>
                    Email:- parinatideshmukh10@gmail.com <br></br>
                    Number:- 9766686137
                </h1>
               
                
            </div>
        )
    }
}

export default Contact;
