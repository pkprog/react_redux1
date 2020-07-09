import React from 'react';
import './Table.css';

const tableColumnsStyle = {
    "width": "50%"
};

export default function TrHeader() {
    return (
        <thead>
            <tr>
                <th className="header" scope="row" style={tableColumnsStyle}>Номер п/п</th>
                <th className="header" scope="row" style={tableColumnsStyle}>Имя</th>
            </tr>
        </thead>
    );
}