import React from 'react';
import './styles.css'

interface linkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    linkSrc: string;
    linkName: string | React.ReactNode;
    linkStyles?: string
}
const Link: React.FC<linkProps> = ({ linkSrc, linkName, linkStyles }) => {
    return (
        <a href={linkSrc} className={`link ${linkStyles}`}>{linkName}</a>
    )

}
export default Link