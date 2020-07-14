import React from "react";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

import './ViewUser.css';


class ViewUserModal extends React.Component {
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
                <Modal show={true} onHide={this.handleModal} backdrop="static" size="lg">
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
                <div className="form-group row">
                    <label className="col-form-label col-3">Номер</label>
                    <div className="col-9">
                        <span className="form-control">{this.props.user.num}</span>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label col-3">Имя</label>
                    <div className="col-9">
                        <span className="form-control">{this.props.user.name}</span>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label col-3">Имя</label>
                    <div className="col-9">
                        <textarea className="form-control" rows={3} value={this.props.user.moment} readOnly={true}/>
                    </div>
                </div>
            </form>
        );
    };
}

ViewUserModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    user: PropTypes.shape({
        name: PropTypes.string.isRequired
    })
};

UserInfo.propTypes = {
    user: PropTypes.shape({
        num: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
};

export default ViewUserModal;