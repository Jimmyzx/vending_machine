import React from "react";
import "./Home.css"; 

function Home() {
    return (
      <div className="home-container">
        <h2>Welcome to the Vending Machine</h2>
        <ul>
          <li>
            <a href="/snack">Snack</a>
          </li>
          <li>
            <a href="/soda">Soda</a>
          </li>
          <li>
            <a href="/candy">Candy</a>
          </li>
        </ul>
      </div>
    );
  }
  
export default Home;
