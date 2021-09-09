import React, { useState, useEffect }from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from "./constants";
import "./App.css";
import Header from './components/header';
import Picture from './components/picture';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Picture />
      <Footer />
    </div>
  );
}


