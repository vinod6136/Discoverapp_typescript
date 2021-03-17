import React from 'react'
import Button from '../../Atoms/Button'
import Input from '../../Atoms/Input'

interface Props {
    content: {
        placeholder: string
    }
}

const SearchBar: React.FC<Props> = ({ content }) => {
    return (
        <div className="search-bar">
            <Input type="text" content={content.placeholder} />
            <Button type="submit" btnValue="Sign In" />

        </div>
    )

}
export default SearchBar