import React from 'react'
import Card from '../../Molecules/Card';
import './styles.css'



const cardsContent = {
    locationList: ['Adventure.jpg', 'Animals.jpg', 'Nature.jpg', 'Auto.jpg', 'Food.jpg', 'lifeStyle.jpg'],
    textList: ['Adventure', 'Animals', 'Nature', 'Auto', 'Food', 'Life Style']
}
const CardList = () => {
    return (
        <div className='cards'>
            {cardsContent.locationList.map((location, index) => {
                return (
                    <Card cardImgSrc={location} cardImgWidth="240px" cardContent={cardsContent.textList[index]} key={index} />
                )
            })}
        </div>
    );
}
export default CardList