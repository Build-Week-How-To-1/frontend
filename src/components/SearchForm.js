import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchForm = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    useEffect (() => {
        axios
            .get(howtos)
            .then(res => {
                const howTo = res.data.filter((tutorial) => tutorial.title.includes(query));
                setData(howTo);
            });
    }, [query]);

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };

    return (
        <form className="search-form" onSubmit={getSearch}>
            <input type="text"
            placeholder="Search..."
            value={search}
            onChange={updateSearch}
        />
        <button className="search-button" type="submit">Search</button>
        </form>

    )
}

export default SearchForm;