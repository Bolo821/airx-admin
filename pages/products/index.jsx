import React, { useEffect, useState } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import TableProjectItems from '~/components/shared/tables/TableProjectItems';
import { Select } from 'antd';
import Link from 'next/link';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';

const { Option } = Select;
const ProductPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(toggleDrawerMenu(false));
    }, []);

    const handleFilter = (e) => {
        e.preventDefault();
    }

    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [status, setStatus] = useState('');
    const [search, setSearch] = useState('');

    const handleCategoryChange = (e) => {
        setCategory(e);
    }
    const handleTypeChange = (e) => {
        setType(e);
    }
    const handleStatusChange = (e) => {
        setStatus(e);
    }
    const handleSearch = (e) => {
        e.preventDefault();
    }
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <ContainerDefault title="Products">
            <HeaderDashboard
                title="Products"
                description="AirX Product Listing"
            />
            <section className="ps-items-listing">
                <div className="ps-section__actions">
                    <Link href="/products/create-product">
                        <a className="ps-btn success">
                            <i className="icon icon-plus mr-2" />
                            New Product
                        </a>
                    </Link>
                </div>
                <div className="ps-section__header">
                    <div className="ps-section__filter">
                        <form
                            className="ps-form--filter"
                            action="index.html"
                            method="get">
                            <div className="ps-form__left">
                                <div className="form-group">
                                    <Select
                                        placeholder="Select Category"
                                        className="ps-ant-dropdown"
                                        listItemHeight={20}
                                        onChange={handleCategoryChange}>
                                        <Option value="clothing-and-apparel">
                                            Clothing & Apparel
                                        </Option>
                                        <Option value="garden-and-kitchen">
                                            Garden & Kitchen
                                        </Option>
                                    </Select>
                                </div>
                                <div className="form-group">
                                    <Select
                                        placeholder="Select Category"
                                        className="ps-ant-dropdown"
                                        listItemHeight={20}
                                        onChange={handleTypeChange}>
                                        <Option value="simple-product">
                                            Simple Product
                                        </Option>
                                        <Option value="groupped-product">
                                            Groupped product
                                        </Option>
                                    </Select>
                                </div>
                                <div className="form-group">
                                    <Select
                                        placeholder="Status"
                                        className="ps-ant-dropdown"
                                        listItemHeight={20}
                                        onChange={handleStatusChange}>
                                        <Option value="active">Active</Option>
                                        <Option value="in-active">
                                            InActive
                                        </Option>
                                    </Select>
                                </div>
                            </div>
                            <div className="ps-form__right">
                                <button className="ps-btn ps-btn--gray" onClick={handleFilter}>
                                    <i className="icon icon-funnel mr-2"></i>
                                    Filter
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="ps-section__search">
                        <form
                            className="ps-form--search-simple"
                            action="index.html"
                            method="get">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search product"
                                onChange={handleSearchChange}
                            />
                            <button onClick={handleSearch}>
                                <i className="icon icon-magnifier"></i>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="ps-section__content">
                    <TableProjectItems />
                </div>
            </section>
        </ContainerDefault>
    );
};
export default connect((state) => state.app)(ProductPage);
