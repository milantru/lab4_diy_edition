import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from './pages/_layout';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counterValue: 0,
        };
    }

    render() {
        return (
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Page1 />} />
                    <Route path="page2" element={<Page2 />} />
                    <Route path="page3" element={
                        <Page3 
                        value={this.state.counterValue} 
                        handleClick={() => this.setState({counterValue: this.state.counterValue + 1})} 
                        />
                    } />
                    <Route path="page4" element={
                        <Page4 
                        value={this.state.counterValue} 
                        handleClick={() => this.setState({counterValue: this.state.counterValue - 1})} 
                        />
                    } />
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
  