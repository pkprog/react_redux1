import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableWithViewModal from "./Table/TableWithViewModal";

function App() {

    return (
        <div className="App container-fluid">
            <div className="row">
                <TableWithViewModal />
            </div>
        </div>
    );
}

export default App;
