import React from 'react';
import Images from '../../Atoms/Images';
import Link from '../../Atoms/Link';

interface carouselIndicatorsProps {
    indicatorLink: string;
    indicatorLocation: string;
    imgWidth?: string;
    imgHeight?: string
}

const CarouselIndicators: React.FC<carouselIndicatorsProps> = ({ indicatorLink, indicatorLocation, imgHeight, imgWidth }) => {
    return (
        <div className="carousel-indicators">
            <Link linkSrc={indicatorLink} linkName={<Images imgAlt="indicator" imgSrc={indicatorLocation} imgHeight={imgHeight} imgWidth={imgWidth} />} />

        </div>
    )

}
export default CarouselIndicators