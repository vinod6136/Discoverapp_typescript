import React from 'react'
import Logo from '../../Molecules/Logo';
import NavLinks from '../../Molecules/NavLinks';
import SearchBar from '../../Molecules/search';
import './styles.css'

const headerData = {
    search: {
        placeholder: "Search for Shows"
    },
    logoData: {
        logoSrc: ['hamburgerIcon.svg', 'logo.png'],
        logoAlt: ['menu_icon', 'logo_icon']
    },
    navItems: ["Home", "Pages", "Discover", "Premium"]
}

const Header: React.FC = () => {
    return (
        <div className="header-bar">
            <Logo content={headerData.logoData} />
            <NavLinks content={headerData.navItems} />
            <SearchBar content={headerData.search} />
        </div>
    )

}
export default Header