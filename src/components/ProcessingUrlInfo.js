import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "../App.css";

const ProcessingUrlInfo = ({ randm_url }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    axios.get(randm_url).then((res) => setContent(res.data));

    // console.log(res.data))

    /* .catch((error) => {
            if( error.res ){
                console.log(error.res.data); // => the response payload 
            }
          }) */
  }, [randm_url]);
  // console.log({content});

  return (
    <div className="app">
      <div className="card">
        <h1>{content?.name}</h1>
        <h2>
          {content?.status} {content.species}
        </h2>
        <h3>Origin: {content.origin?.name} </h3>
        <img src={content?.image} alt="" />
        {randm_url}
      </div>
    </div>
  );
};

export default ProcessingUrlInfo;
