import React, { ImgHTMLAttributes } from 'react'

interface imageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    imgSrc: string;
    imgAlt?: string;
    imgWidth?: string;
    imgHeight?: string
}

const Images: React.FC<imageProps> = ({ imgSrc, imgAlt, imgWidth, imgHeight }) => {
    return (
        <img src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
    )
}
export default Images