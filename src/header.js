import React, { useState, useEffect }from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from "./constants";
import "./App.css";

function Header() {
    return (
      <div className="Header">
        <h1>
          Build your NASA own app with rocketships! <span role="img" aria-label='go!'>🚀</span>
        </h1>
      </div>
    );
}


export default Header;