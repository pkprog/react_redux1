import React from "react";
import PropTypes from "prop-types";

import './Table.css'
import OpenModalByRowClickButton from "./OpenModalByRowClickButton";

const TableRow = (props) => {
    const {user, onRowClick} = props;

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

TableRow.propTypes = {
    user: PropTypes.object.isRequired,
    onRowClick: PropTypes.func.isRequired
};

export default TableRow;
