import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="main">  
            <h1>Home</h1>
            <Link to={'/dashboard'}>Dashboard</Link>    
        </div>
    )
}

export default Home