import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import selfhelp from '../Image/selfhelp.jpg';
import coffee from '../Image/coffee.jpg';
import thriller from '../Image/thriller.jpg';
import mystery from '../Image/mystery.jpg'
import '../Css/PagesCss.css';

class Home extends Component {
    render() {
        return (
            <div className='Home-Images'>
                <img id='bookimage' src={selfhelp}></img>
                <img id='bookimage' src={coffee}></img>
                <img id='bookimage' src={thriller}></img>
                <img id='bookimage' src={mystery}></img>
            </div>
        )
    }
}

export default Home;
