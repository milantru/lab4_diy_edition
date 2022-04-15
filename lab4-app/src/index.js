import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from './pages/_layout';
import Page1 from './pages/page1';
import Page2 from './pages/page2';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Page1 />} />
                    <Route path="page2" element={<Page2 />} />
                </Route>
            </Routes>
            </BrowserRouter>
        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
  