import React from "react";
import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Main from "./Main";

function Body (props) {

    
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
    .then((res) => res.json())
    .then((data) => setData(data.message))
  })

    return (
        <div className="body">
            <Header/>
            <Main/>
        </div>
    )
}

export default Body;