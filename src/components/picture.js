import React, { useState, useEffect }from "react";
import { BASE_URL, API_KEY } from "../constants/index";
import axios from 'axios';
import styled from 'styled-components';

const StyledPicture = styled.div `
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 8px;
        max-width: 100px:
        height: auto;
    }
    h3 {
        color: #576675;
    }
    p {
        color: #5ac18e;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: purple;
    }
`


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
        <StyledPicture>
            <img src={pic} alt="space picture"/>
            <h3>{date}</h3>
            <p>{info}</p>
        </StyledPicture>
    );
}

