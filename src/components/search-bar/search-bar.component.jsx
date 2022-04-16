import React from "react"
import './search-bar.styles.css'

export const SearchBar = ({placeholder, handleOnChange}) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleOnChange}
    />
)