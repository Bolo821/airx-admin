import React from 'react';
import { useState } from 'react'

const FormAccountSettings = () => {
    const [product, setProduct] = useState('');
    const [date, setDate] = useState('');
    const [payment, setPayment] = useState('');
    const [fulfillment, setFullfillment] = useState('');
    const [address, setAddress] = useState('');

    const handleProductChange = (e) => {
        setProduct(e.target.value);
    }
    const handleDateChange = (e) => {
        setDate(e.target.value);
    }
    const handlePaymentChange = (e) => {
        setPayment(e.target.value);
    }
    const handleFulfillmentChange = (e) => {
        setFullfillment(e.target.value);
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }
    const handleAddOrderClick = (e) => {
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
                        <label>Product</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                            onChange={handleProductChange}
                            value={product}
                        />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Date</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                            onChange={handleDateChange}
                            value={date}
                        />
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="form-group">
                        <label>Payment</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                            onChange={handlePaymentChange}
                            value={payment}
                        />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Fulfillment</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                            onChange={handleFulfillmentChange}
                            value={fulfillment}
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
            </div>
            <div className="ps-form__submit text-center">
                <button className="ps-btn ps-btn--gray mr-3" onClick={handleCancelClick}>Cancel</button>
                <button className="ps-btn success" onClick={handleAddOrderClick}>Add Order</button>
            </div>
        </form>
    );
};

export default FormAccountSettings;
