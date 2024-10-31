import React, { useEffect } from "react";

import AlbumItem from "./AlbumItem";

import "./AlbumGrid.css";

const AlbumGrid = ({
  dynamicAlbum,
  visibleData,
  setVisibleData,
  itemsToShow,
  setItemsToShow,
}) => {
  //asked ai for assitance with INFINITE SCROLL
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.offsetHeight
      ) {
        setItemsToShow((prevCount) => prevCount + 12);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setItemsToShow]);

  useEffect(() => {
    setVisibleData(dynamicAlbum.slice(0, itemsToShow));
  }, [itemsToShow, dynamicAlbum, setVisibleData]);
  //ai assistance end
  return (
    <div id="grid-content" className="album-grid row">
      {visibleData.map((item) => (
        <AlbumItem key={item.Id} audioData={item}></AlbumItem>
      ))}
    </div>
  );
};

export default AlbumGrid;
