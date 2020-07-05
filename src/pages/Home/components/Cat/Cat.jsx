import React from 'react';
import Lottie from 'react-lottie';
import animationCat from './4889-cat.json'
import './Cat.css';
import kiraraIntro from '../../../../assets/images/kiraraIntro.png'

const Cat = ({ history }) => {
    
    const defaultOptions = {
        loop: true,
        autoplat: true,
        animationData: animationCat,
    };

    function handleOnClick() {
        history.push('/chat')
    }
    
    return (
        <div onClick={handleOnClick} 
        className="cat-container">
            <img src={kiraraIntro} alt=""/>
        </div>
    )
};

export default Cat;
