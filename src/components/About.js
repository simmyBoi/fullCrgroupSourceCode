import React from "react";

import "./About.css";

const About = ({
  searchBar,
  setSearchBar,
  setDynamicAlbum,
  albums,
  setItemsToShow,
  setCategoryInitialValue,
}) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchAlbum = albums.filter(
      (album) =>
        album.Title.toLowerCase().includes(searchBar.toLowerCase()) === true
    );
    setDynamicAlbum(searchAlbum);
    setSearchBar("");
    setItemsToShow(12);
    setCategoryInitialValue("");
  };
  return (
    <div className="about-div">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          className="search-bar"
          type="text"
          value={searchBar}
          onChange={(e) => setSearchBar(e.target.value)}
          placeholder="Search by title..."
          required
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="arthur-div">
        <img
          className="main-img"
          src="https://fathersheart.co.za/wp-content/uploads/2020/05/CAP7154-2.jpg"
          alt="Dr Arthur Frost"
        ></img>
        <h2 className="about-header">
          Dr. Frost has a deep desire to equip the body of Christ and activate
          every member to become a fully mature and functional Christian in
          God's army.
        </h2>
      </div>
    </div>
  );
};

export default About;
