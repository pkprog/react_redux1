import React from "react";
import './Table.css'
import OpenModalByRowClickButton from "./OpenModalByRowClickButton";

const TableRow = ({user, onRowClick}) => {
    const onClick = function(event) {
        onRowClick(user);
    };

    return (
        <tr onClick={onClick}>
            <td>{user.num}</td>
            <td><span>{user.name}</span>
                <OpenModalByRowClickButton onClick={onClick} />
            </td>
        </tr>
    );
};

export default TableRow;
