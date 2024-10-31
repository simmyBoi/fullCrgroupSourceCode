import React from "react";

import "./AlbumItem.css";

const AlbumItem = ({ audioData }) => {
  const apiUrl = "https://arthurfrost.qflo.co.za";

  return (
    <div key={audioData.Id} className="col-lg-2 col-md-12 col-sm-12 album-item">
      <div className="card">
        <img
          src={`${apiUrl}/${audioData.Icon}`}
          className="card-img-top"
          alt="audio cover"
          onError={(e) => {
            if (
              e.target.src !== `${process.env.PUBLIC_URL}/image_not_found.png`
            ) {
              e.target.src = `${process.env.PUBLIC_URL}/image_not_found.png`;
            }
          }}
        />
        <div className="card-body">
          <h6 className="card-title">{audioData.Title}</h6>
          <p className="card-text">{audioData.Category}</p>
        </div>
        <audio controls className="audio-controls">
          <source src={`${apiUrl}/${audioData.Audio}`} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default AlbumItem;
