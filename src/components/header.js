import React, { useState, useEffect }from "react";
import { BASE_URL, API_KEY } from "../constants/index";
import axios from 'axios';
import styled from 'styled-components';


const StyledHeader = styled.div `
    h1 {
        color: #008080;
    }
    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: orange;
    }
`

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
        <StyledHeader>
            <h1>  {title} </h1>
        </StyledHeader>
    );
}