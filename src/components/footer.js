import React, { useState, useEffect }from "react";
import { BASE_URL, API_KEY } from "../constants/index";
import axios from 'axios';


export default function Footer () {
    return (
        <footer className = 'App'>
            <p>contact us: 867-5309</p>
            <button>Press Button To Launch Craft</button>
        </footer>
    );
}