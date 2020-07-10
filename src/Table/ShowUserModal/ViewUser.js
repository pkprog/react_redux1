import React from "react";
import Modal from "react-bootstrap/Modal";

import './ViewUser.css';


export default class ViewUserModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
        };
        this.onClose = props.onClose;
        //
        this.handleModal = this.handleModal.bind(this);
    };

    handleModal = function(event) {
        this.onClose(event);
    };

    render () {
        return (
            <React.Fragment>
                <Modal show={true} onHide={this.handleModal} backdrop="static">
                    <Modal.Body>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <h5>Просмотр пользователя: {this.state.user.name}</h5>
                                    <div>Инфо: <UserInfo user={this.state.user} /></div>
                                    <button className="btn btn-primary" onClick={this.handleModal}>Close modal</button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        );
    };
}

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        };
    }

    render () {
        return (
            <form>
            {/*<div className="row">*/}
            {/*    <div className="col-12">*/}
                    <div className="form-group row">
                        <label className="col-form-label col-6">Номер</label>
                        <div className="col-6">
                            <span className="form-control">{this.props.user.num}</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-6">Имя</label>
                        <div className="col-6">
                            <span className="form-control">{this.props.user.name}</span>
                        </div>
                    </div>
                {/*</div>*/}
            {/*</div>*/}
            </form>
        );
    };
}
