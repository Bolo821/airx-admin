import React from 'react';
import { useState } from 'react'

const FormAccountSettings = () => {
    const [fullName, setFullName] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [address, setAddress] = useState('');
    const [bio, setBio] = useState('');

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    }
    const handleDisplayName = (e) => {
        setDisplayName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleRoleChange = (e) => {
        setRole(e.target.value);
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }
    const handleBioChange = (e) => {
        setBio(e.target.value);
    }
    const handleUpdateClick = (e) => {
        e.preventDefault();
    }
    const handleCancelClick = (e) => {
        e.preventDefault();
    }

    return (
        <form
            className="ps-form--account-settings"
            action="index.html"
            method="get">
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                            onChange={handleFullNameChange}
                            value={fullName}
                        />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Display Name</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                            onChange={handleDisplayName}
                            value={displayName}
                        />
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                            onChange={handleEmailChange}
                            value={email}
                        />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Role</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                            onChange={handleRoleChange}
                            value={role}
                        />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Address</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                            onChange={handleAddressChange}
                            value={address}
                        />
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="form-group">
                        <label>Bio</label>
                        <textarea
                            className="form-control"
                            rows="6"
                            placeholder=""
                            onChange={handleBioChange}
                            value={bio}></textarea>
                    </div>
                </div>
            </div>
            <div className="ps-form__submit text-center">
                <button className="ps-btn ps-btn--gray mr-3" onClick={handleCancelClick}>Cancel</button>
                <button className="ps-btn success" onClick={handleUpdateClick}>Update Profile</button>
            </div>
        </form>
    );
};

export default FormAccountSettings;
