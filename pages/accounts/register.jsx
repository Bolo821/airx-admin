import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { register } from '~/store/auth/action';

import { Form, Input } from 'antd';
import { connect } from 'react-redux';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', email: '', phoneNumber: '', password: '', passwordConfirm: ''};
    }

    static getDerivedStateFromProps(props) {
        if (props.isLoggedIn === true) {
            Router.push('/');
        }
        return false;
    }

    handleSubmit = e => {
        let data = {
            name: this.state.name,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            password: this.state.password
        }
        this.props.dispatch(register(data));
    };

    handleNameChange = e => {
        e.preventDefault();
        this.setState({name: e.target.value});
    }
    handleEmailChange = e => {
        e.preventDefault();
        this.setState({email: e.target.value});
    }
    handlePhoneNumberChange = e => {
        this.setState({phoneNumber: e.target.value});
        e.preventDefault();
    }
    handlePasswordChange = e => {
        e.preventDefault();
        this.setState({password: e.target.value});
    }
    handlePasswordConfirmChange = e => {
        e.preventDefault();
        this.setState({passwordConfirm: e.target.value});
    }

    render() {
        return (
            <div className="ps-my-account">
                <div className="container">
                    <Form
                        className="ps-form--account form-account-login-rt"
                        style={{paddingTop: '0px'}}>
                        <div id="register">
                            <div className="ps-form__content">
                                <div style={{textAlign: 'center'}}>
                                    <h2>Welcome to AirX</h2>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="fullName"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your full name!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Full Name"
                                            onChange={this.handleNameChange}
                                            value={this.state.name}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your email!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="email"
                                            placeholder="Email address"
                                            onChange={this.handleEmailChange}
                                            value={this.state.email}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="phone"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your phone number!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="number"
                                            placeholder="Phone Number"
                                            onChange={this.handlePhoneNumberChange}
                                            value={this.state.phoneNumber}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your password!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="password"
                                            placeholder="Password..."
                                            onChange={this.handlePasswordChange}
                                            value={this.state.password}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item
                                        name="confirm"
                                        dependencies={['password']}
                                        hasFeedback
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Please confirm your password!',
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject('The two passwords that you entered do not match!');
                                            },
                                        }),
                                        ]}
                                    >
                                    <Input
                                        className="form-control"
                                        type="password"
                                        placeholder="Confirm Password"
                                        onChange={this.handlePasswordConfirmChange}
                                        value={this.state.passwordConfirm}
                                    />
                                    </Form.Item>
                                </div>
                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn success ps-btn--fullwidth"
                                        onClick={this.handleSubmit}>
                                        Register
                                    </button>
                                </div>
                            </div>
                            <div className="ps-form__footer" style={{padding: '0'}}>
                                <div style={{textAlign: 'center', marginBottom: '20px'}}>
                                    <Link href="/accounts/login">
                                        <a style={{fontWeight: '900'}}>
                                            ALREADY HAVE AN ACCOUNT SIGN IN...
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(Register);
