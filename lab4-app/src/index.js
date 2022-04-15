import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/_layout';
import Home from './pages/home';
import PageWithInput from './pages/page-with-input';
import Incrementor from './pages/incrementor';
import Decrementor from './pages/decrementor';

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
                    <Route index element={<Home />} />
                    <Route path="page-with-input" element={<PageWithInput />} />
                    <Route path="incrementor" element={
                        <Incrementor 
                        text="Click me to increment!"
                        value={this.state.counterValue} 
                        handleClick={() => this.setState({counterValue: this.state.counterValue + 1})} 
                        />
                    } />
                    <Route path="decrementor" element={
                        <Decrementor 
                        text="Click me to decrement!"
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
  