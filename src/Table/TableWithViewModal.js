import React, {useState} from "react";
import ViewUserModal from "./ShowUserModal/ViewUser";
import Table from "./Table";

export default function TableWithViewModal() {
    const initialStateViewUserModal = {
        viewUserModalOpened: false,
        user: null
    };
    const [vuState, setVuState] = useState(initialStateViewUserModal);

    const viewUserModalFunctions = {
        open: function(user) {
            if (!vuState.viewUserModalOpened) {
                setVuState((prevState) => {
                    return {...prevState, viewUserModalOpened: true, user: user};
                });
            }
        },
        closed: function() {
            setVuState((prevState) => {
                return {...prevState, viewUserModalOpened: false, user: null};
            });
        }
    };
    const tableFunctions = {
        rowClicked: function(user) {
            viewUserModalFunctions.open(user);
        }
    };

    return (
        <div className="col-12">
            {
                vuState.viewUserModalOpened ?
                    <ViewUserModal user={vuState.user} onClose={viewUserModalFunctions.closed} />
                    :
                    null
            }
            <Table onRowClick={tableFunctions.rowClicked}/>
        </div>
    );
}
