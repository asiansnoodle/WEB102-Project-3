import React from "react";
import { useState } from "react";
import flashCards from "./data";

const Header = () => {

    return (
        <div className="header">
            <h1 className="title">Data Structures and Algorithms</h1>
            <h3 className="description">Practice your data structures and algorithms knowledge</h3>
            <h3 className="description">Number of cards: {flashCards.length}</h3>
        </div>
    )

}

export default Header