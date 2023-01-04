import React from "react";
import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Main from "./Main";

function Body (props) {

    
  const [data, setData] = useState(null);

    return (
        <div className="body">
            <Header/>
            <Main/>
        </div>
    )
}

export default Body;