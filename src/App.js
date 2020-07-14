import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TableWithViewModal from "./Table/TableWithViewModal";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/pkprog/react_redux1/users?_limit=10')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            });
    }, []);

    return (
        <div className="App container-fluid">
            <div className="row">
                <TableWithViewModal tableData={users} />
            </div>
        </div>
    );
}

export default App;
