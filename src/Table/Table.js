import React from 'react';
import PropTypes from 'prop-types';

import TrHeader from "./TrHeader";
import TableRow from "./TableRow";
import './Table.css'

// const data = [
//     {num: 1, name: "Анна"},
//     {num: 2, name: "Ира"}
// ];

function Table(props) {
    const {tableData, onRowClick} = props;
    return (
        <table className="mainTable col-8 table table-bordered">
            <TrHeader />
            <tbody>
            {
                tableData.map((v, index) => {
                    return <TableRow key={v.num} user={v} onRowClick={onRowClick}/>;
                })
            }
            </tbody>
        </table>
    );
}

Table.propTypes = {
    tableData: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
        if (!Array.isArray(propValue)) {
            return new Error("Object is not array: "+ propFullName + ":" + componentName);
        }
        for (let i = 0; i < propValue.length; i++) {
            if (propValue[i].num === undefined) {
                return new Error("Object has not property [num]: "+ propFullName + ":" + componentName);
            }
        }
    }).isRequired,
    onRowClick: PropTypes.func
};

export default Table;
