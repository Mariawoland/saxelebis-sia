import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

class MyElement extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <App />;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyElement />);
