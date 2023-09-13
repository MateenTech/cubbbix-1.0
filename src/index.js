import React from 'react';
import ReactDOM from 'react-dom/client';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { BrowserRouter } from 'react-router-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)