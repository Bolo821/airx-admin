import React, { useEffect, useState } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import TableOrdersItems from '~/components/shared/tables/TableOrdersItems';
import { Select } from 'antd';
import Link from 'next/link';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';

import { database } from '../../store/firebase';
import { setOrders, setSearchText, setStatusFilter } from '../../store/order/action';

const { Option } = Select;
const OrdersPage = () => {
    const dispatch = useDispatch();

    const orderRef = database.ref('order/');
    orderRef.on('value', (snapshot) => {
        let result = [];
        for(var i in snapshot.val())
            result.push(snapshot.val()[i]);
        dispatch(setOrders(result));
    });

    useEffect(() => {
        dispatch(toggleDrawerMenu(false));
    }, []);

    const handleSearchChange = (e) => {
        dispatch(setSearchText(e.target.value));
    }
    const handleStatusChange = (e) => {
        dispatch(setStatusFilter(e));
    }

    return (
        <ContainerDefault>
            <HeaderDashboard
                title="Orders"
                description="AirX Orders Listing"
            />
            <section className="ps-items-listing">
                <div className="ps-section__header simple">
                    <div className="ps-section__filter">
                        <form
                            className="ps-form--filter"
                            action="index.html"
                            method="get">
                            <div className="ps-form__left">
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Search..."
                                        onChange={handleSearchChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <Select
                                        placeholder="Status"
                                        className="ps-ant-dropdown"
                                        listItemHeight={20}
                                        onChange={handleStatusChange}>
                                        <Option value="">All</Option>
                                        <Option value="pending">Pending</Option>
                                        <Option value="completed">Completed</Option>
                                    </Select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="ps-section__actions">
                        <Link href="/orders/new-order">
                            <a className="ps-btn success">
                                <i className="icon icon-plus mr-2"></i>New Order
                            </a>
                        </Link>
                        {/*<a
                            className="ps-btn ps-btn--gray"
                            href="#">
                            <i className="icon icon-download2 mr-2"></i>Export
                        </a>*/}
                    </div>
                </div>
                <div className="ps-section__content">
                    <TableOrdersItems />
                </div>
            </section>
        </ContainerDefault>
    );
};
export default OrdersPage;
