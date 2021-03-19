import React, { useState } from 'react';
import "./search.css";

function Search({ submit }) {
    const [text, setText] = useState("");

    const onChangeText = (event) => {
        setText(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (text.trim().length > 0) {
            submit(text);
        }
    }

    return (
        <form onSubmit={onSubmit} className="search-form">
            <input
                type="text"
                onChange={onChangeText}
                placeholder="Enter your text"
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default Search;
