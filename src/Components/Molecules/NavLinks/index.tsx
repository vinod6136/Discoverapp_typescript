import React from 'react';
import Link from '../../Atoms/Link';
import './styles.css'

interface navProps {
    content: string[];
}

const NavLinks: React.FC<navProps> = ({ content }) => {
    // console.log(content, "con")

    return (
        <div className="nav-links">
            {content && content.map((navItems, index) => {
                return (
                    <Link linkSrc={`/${navItems}`} linkStyles="nav-items" linkName={navItems} key={index} />
                )
            })}
        </div>
    )
}
export default NavLinks