import React from 'react';
import './App.css';
import {data} from "./Components/json";
import {Listing} from "./Components/Listing/Listing";

function App() {
    return (
        <Listing items={data}/>
    );
}
export default App;
