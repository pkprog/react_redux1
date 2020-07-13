import React from 'react';
import TrHeader from "./TrHeader";
import './Table.css'
import TableRow from "./TableRow";

const data = [
    {num: 1, name: "Анна"},
    {num: 2, name: "Ира"}
];

export default function Table({onRowClick}) {

    return (
        <table className="mainTable col-8 table table-bordered">
            <TrHeader />
            <tbody>
            {
                data.map((v, index) => {
                    return <TableRow key={v.num} user={v} onRowClick={onRowClick}/>;
                })
            }
            </tbody>
        </table>
    );
}


