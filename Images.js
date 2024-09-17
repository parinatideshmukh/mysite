import React, { Component } from 'react';
import '../Css/ImageCss.css';
import { Link } from 'react-router-dom';
import Airplane from '../Image/airplane.jpg';
import Cactus from '../Image/cactus.webp';
import Cartoon from '../Image/cartoon.jpg';
import Drink from '../Image/drink.jpg';
import Duck from '../Image/duck.jpg';
import Flower from '../Image/flower.jpg';
import Coffee from '../Image/coffee.webp';
import Moon from '../Image/moon.jpg';
import Pot from '../Image/pot.webp';
import Flowers from '../Image/flowers.jpg';

class Images extends Component {
    render() {
        return (
            <div id='Image-Main'>
                <img className='Image-Size' src={Airplane}></img> 
                <img className='Image-Size' src={Cactus}></img>
                <img className='Image-Size' src={Cartoon}></img>
                <img className='Image-Size' src={Drink}></img>
                <img className='Image-Size' src={Duck}></img>
                <img className='Image-Size' src={Flower}></img>
                <img className='Image-Size' src={Coffee}></img>
                <img className='Image-Size' src={Moon}></img>
                <img className='Image-Size' src={Pot}></img>
                <img className='Image-Size' src={Flowers}></img>
            </div>
        )
    }
}

export default Images;
