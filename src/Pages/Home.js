import React, { useState, useEffect } from "react";
import API from "../Utils";
import Card from "../Components/Card";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState("");
  const [query, setQuery] = useState("Search");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${API.APP_ID}&app_key=${API.APP_KEY}`
        );
        if (response.ok) {
          const dat = await response.json();
          setData(dat?.hits || []);
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [query]);

  const updateLoading = (e) => {
    setLoading(e.target.value);
  };

  const getLoading = (e) => {
    e.preventDefault();
    setQuery(loading);
    setLoading("");
  };

  return (
    <div>
      <h1>Data Results:</h1>
      <form onSubmit={getLoading} className="search-form">
        <input
          placeholder="smoothie, salad"
          className="search-bar"
          type="text"
          value={loading}
          onChange={updateLoading}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <ul>
        {data.map((item) => (
          <Card
            key={item.recipe.uri}
            title={item.recipe.label}
            image={item.recipe.image}
            url={item.recipe.url}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
