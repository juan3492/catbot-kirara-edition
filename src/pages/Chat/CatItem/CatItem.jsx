import React from 'react'
import './CatItem.css'
import catAvatar from '../../../assets/images/kiraraAvatar.png'
import Fade from 'react-reveal/Fade'


const CatItem = ({text, img, mode}) => {
    return(
        <div className="cat-item-container">
            <div className="cat-item-avatar-container">
                <img  src={catAvatar} alt=""/>
            </div>
                { mode === 'text' ? 

                <div className="cat-item-messages">
                    {text.map((t, index) => 
                        <Fade left>
                            <label > {t} </label>
                        </Fade>
                    )}
                </div>
                :
                <div className="cat-item-meme-container">
                    <img className='cat-item-meme' src={img} alt=""/>
                </div>
                }
        </div>
    )
}

export default CatItem