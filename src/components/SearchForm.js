import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const SearchForm = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    useEffect (() => {
        axiosWithAuth()
            .get("/howtos")
            .then(res => {
                // const howTo = res.data.filter((tutorial) => tutorial.title.includes(query));
                // setData(howTo);
                console.log(res, 'how to index working');
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