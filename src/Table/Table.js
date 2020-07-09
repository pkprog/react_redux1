import React from 'react';
import TrHeader from "./TrHeader";
import './Table.css'
import TrBody from "./TrBody";
import ViewUserModal from "./ShowUserModal/ViewUser";

const data = [
    {num: 1, name: "Анна"},
    {num: 2, name: "Ира"}
];

// function onRowClick(event) {
//     console.log("123");
// }

export default function Table() {
    const state = {
        user: {}
    };

    const onRowClick = function(event, user) {
        this.setState({
            user: user
        });
        console.log("123");
    };

    return (
        <div className="col-12">
            <div className="row">
                <table className="mainTable col-8 table table-bordered">
                    <TrHeader />
                    <tbody>
                    {
                        data.map((v, index) => {
                            return (
                                <TrBody key={v.num} user={v} />
                                );
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}


