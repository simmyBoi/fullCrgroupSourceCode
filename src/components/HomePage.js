import React, { useState, useEffect } from "react";

import axios from "axios";

import About from "./About";
import CategoryFilter from "./filters/CategoryFilter";
import AlbumGrid from "./albums/AlbumGrid";

import "./HomePage.css";

const HomePage = () => {
  const [albums, setAlbums] = useState([]);
  const [dynamicAlbum, setDynamicAlbum] = useState([]);
  const [searchBar, setSearchBar] = useState("");
  const [visibleData, setVisibleData] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(12);
  const [categoryInitialValue, setCategoryInitialValue] = useState("");

  useEffect(() => {
    axios
      .get("https://arthurfrost.qflo.co.za/php/getTimeline.php")
      .then(function (response) {
        const albumData = response.data.Timeline;
        setAlbums(albumData);
        setDynamicAlbum(albumData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleReset = () => {
    setDynamicAlbum(albums);
    setItemsToShow(12);
    setSearchBar("");
    setCategoryInitialValue("'");
  };

  return (
    <div>
      <div className="header">
        <About
          searchBar={searchBar}
          setSearchBar={setSearchBar}
          setDynamicAlbum={setDynamicAlbum}
          albums={albums}
          setItemsToShow={setItemsToShow}
          setCategoryInitialValue={setCategoryInitialValue}
        ></About>
        <div className="filters">
          <CategoryFilter
            setDynamicAlbum={setDynamicAlbum}
            albums={albums}
            setItemsToShow={setItemsToShow}
            categoryInitialValue={categoryInitialValue}
            setCategoryInitialValue={setCategoryInitialValue}
          ></CategoryFilter>
        </div>
        <button className="reset-btn" onClick={handleReset}>
          Reset Search & Filter
        </button>
      </div>
      <AlbumGrid
        dynamicAlbum={dynamicAlbum}
        visibleData={visibleData}
        setVisibleData={setVisibleData}
        itemsToShow={itemsToShow}
        setItemsToShow={setItemsToShow}
      ></AlbumGrid>
    </div>
  );
};

export default HomePage;
