import React from 'react';
import Images from '../../Atoms/Images';
import Link from '../../Atoms/Link';
import './styles.css';

interface Props {
    content: {
        logoSrc: string[];
        logoAlt: string[]
    }
}

const Logo: React.FC<Props> = ({ content }) => {

    return (
        <div className="logo-section">
            <Images imgSrc={content.logoSrc[0]} imgAlt={content.logoAlt[0]} imgHeight="20px" imgWidth="20px" />
            <Link linkSrc="/" linkName={<Images imgSrc={content.logoSrc[1]} imgAlt={content.logoAlt[1]} imgWidth="200px" />} />
        </div>
    )

}
export default Logo