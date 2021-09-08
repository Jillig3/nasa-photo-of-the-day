import React, { useState, useEffect }from "react";
import { BASE_URL, API_KEY } from "../constants/index";
import axios from 'axios';

export default function Header () {
    const [ title, setTitle ] = useState('')

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(resp => {
            setTitle(resp.data.title)
        }) .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className = 'AppHeader'>
            <h1>  {title} </h1>
        </div>
    );
}