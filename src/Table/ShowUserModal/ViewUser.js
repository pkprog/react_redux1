import React from "react";

import './ViewUser.css';


export default class ViewUserModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            showModal: true
        };
        this.onClose = props.onClose;
        //
        this.handleModal = this.handleModal.bind(this);
    };

    handleModal = function(event) {
        this.setState({showModal: false});
        this.onClose(event);
    };

    render () {
        return (
            <React.Fragment>
                {
                    this.state.showModal &&
                    <div className="modal2">
                        <div className="modal-body2">
                            <h5>Просмотр пользователя: {this.state.user.name}</h5>
                            <div>Инфо: <UserInfo user={this.state.user} /></div>
                            <button onClick={this.handleModal}>Close modal</button>
                        </div>
                    </div>
                }
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
