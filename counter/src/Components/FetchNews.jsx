import React, {useState} from "react";
import axios from "axios";

const FetchNews = () => {

const [news, setNews] = useState([]);


const fetchNews = () => {
  axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=292c45a19778404eaa8b2dfb34a370f1")
  .then((response) => {

    setNews (response.data.articles)
  })
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

      <div className="container">
        
        </div>
    </>
  );
};

export default FetchNews;
