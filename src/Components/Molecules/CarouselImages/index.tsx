import React from 'react';
import Images from '../../Atoms/Images';


interface carouselImgProps {
    carouselImgSrc: string;
    carouselImgAlt?: string;
}

const CarouselImages: React.FC<carouselImgProps> = ({ carouselImgSrc, carouselImgAlt, ...props }) => {
    return (
        <Images imgSrc={carouselImgSrc} imgAlt={carouselImgAlt} />
    )

}
export default CarouselImages