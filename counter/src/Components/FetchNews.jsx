import React from "react";
import axios from "axios";

const FetchNews = () => {

const fetchNews = () => {
  console.log("clicked")
}

  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={fetchNews}>FetchNews</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FetchNews;
