import React from 'react';
import CardList from '../Organisms/CardList';
import CarouselSlider from '../Organisms/Carousel';
import Header from '../Organisms/header';

const templateData = {
    cardDataList: {
        cardImgs: ['adventure.jpg', 'animals.jpg', 'auto.jpg', 'food.jpg', 'nature.jpg'],
        cardContents: ['Adventures', 'Animals', 'Automotives', 'Food', 'Nature']
    }
}

const Template: React.FC = () => {
    return (
        <div className="template">
            <Header />
            <CardList />
            <CarouselSlider />
        </div>
    )
}
export default Template