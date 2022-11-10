import React from "react";
import Parent from "./PassValue/Parent";
import Child from "./PassValue/Child";

export default function Home(){
    return(
        <div className="home">
            <h3>REACT KNOWLEDGE LIST</h3>
            <Parent/>
            <Child/>
        </div>
    )
}