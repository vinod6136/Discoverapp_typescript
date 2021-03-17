import React from 'react';
import Images from '../../Atoms/Images';
import './styles.css'

interface CardProps {
    cardImgSrc: string;
    cardImgClass?: string;
    cardContent: string;
    cardImgWidth?: string;
    cardImgHeight?: string;

}

const Card: React.FC<CardProps> = ({ cardImgSrc, cardImgClass, cardContent, cardImgHeight, cardImgWidth }) => {
    console.log(cardContent, "card atom")
    return (
        <div className="card-outer">
            <Images imgSrc={cardImgSrc} className={cardImgClass} imgWidth={cardImgWidth} imgHeight={cardImgHeight} />
            <div className="card-content">
                {cardContent}
            </div>
        </div>
    )
}
export default Card