import React, { useState, useEffect }from "react";
import { BASE_URL, API_KEY } from "../constants/index";
import axios from 'axios';


export default function Picture () {
    const [ pic, setPic ] = useState('')
    const [ info, setInfo] = useState('')
    const [ date, setDate] = useState('')

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(resp => {
            setPic(resp.data.hdurl)
        }) .catch(err => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(resp => {
            setInfo(resp.data.explanation)
        }) .catch(err => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(resp => {
            setDate(resp.data.date)
        }) .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className = 'App'>
            <img src={pic} alt="space picture"/>
            <h3>{date}</h3>
            <p>{info}</p>
        </div>
    );
}

