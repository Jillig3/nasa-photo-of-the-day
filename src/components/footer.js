import React, { useState, useEffect }from "react";
import { BASE_URL, API_KEY } from "../constants/index";
import axios from 'axios';
import styled from 'styled-components';

const StyledFooter = styled.div `
    button {
        background: red;
        border-radius: 6px;
        border: solid .5px;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: orange;
    }
`

export default function Footer () {
    return (
        <StyledFooter>
            <p>contact us: 867-5309</p>
            <button>Press Button To Launch Craft</button>
        </StyledFooter>
    );
}