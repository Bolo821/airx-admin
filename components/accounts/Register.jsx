import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { login } from '../../../store/auth/action';

import { Form, Input } from 'antd';
import { connect } from 'react-redux';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit = e => {
        this.props.dispatch(login());
        Router.push('/');
    };

    render() {
        return (
            <div className="ps-my-account">
                <div className="container">
                    <Form
                        className="ps-form--account"
                        onFinish={this.handleSubmit}
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
                                    />
                                    </Form.Item>
                                </div>
                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth">
                                        Register
                                    </button>
                                </div>
                            </div>
                            <div className="ps-form__footer" style={{padding: '0'}}>
                                <div style={{textAlign: 'center', marginBottom: '20px'}}>
                                    <Link href="/account/login">
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
