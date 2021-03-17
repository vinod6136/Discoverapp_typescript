import React from 'react';
import Button from '../../Atoms/Button';
import Images from '../../Atoms/Images';
import './styles.css';

interface carouselContentProps {
    heading: string;
    content: string;
    btnValue: string;

}

const CarouselContent: React.FC<carouselContentProps> = ({ heading, content, btnValue, ...props }) => {
    return (
        <div className="carousel-div">
            <h1>{heading}</h1>
            <p>{content}</p>
            <Button type="button" btnValue={btnValue} />
            <div className="play-btn">
                <Images imgAlt="playbtn" imgSrc="play.svg" />
            </div>
        </div>
    )

}
export default CarouselContent