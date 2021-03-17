import React from 'react';
import CarouselContent from '../../Molecules/CarouselContent';
import CarouselImages from '../../Molecules/CarouselImages';
import CarouselIndicators from '../../Molecules/CarouselIndiactors';
import './styles.css'

const carouselData = {
    indicators: ['leftArrow.svg', 'rightArrow.svg'],
    content: {
        imgLocation: 'banner1.jpg',
        heading: "Britney Spears",
        content: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
        btnValue: ['click', 'check', 'Watch Now']
    }
}

const CarouselSlider: React.FC = () => {
    return (
        <div className="carousel-slider">
            <CarouselIndicators indicatorLink={carouselData.indicators[0]} indicatorLocation={carouselData.indicators[0]} imgHeight="20px" imgWidth="20px" />
            <CarouselContent heading={carouselData.content.heading} content={carouselData.content.content} btnValue={carouselData.content.btnValue[2]} />
            <CarouselImages carouselImgSrc={carouselData.content.imgLocation} carouselImgAlt={carouselData.content.imgLocation} />
            <CarouselIndicators indicatorLink={carouselData.indicators[1]} indicatorLocation={carouselData.indicators[1]} imgHeight="20px" imgWidth="20px" />
        </div>
    )

}
export default CarouselSlider