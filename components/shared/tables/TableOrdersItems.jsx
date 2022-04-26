import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import DropdownAction from '~/components/elements/basic/DropdownAction';
import { useSelector } from 'react-redux';
import Utils from '~/store/utils';

import { Table, Input, Button, Popconfirm, Form } from 'antd';

const TableOrdersItems = () => {
    const orderData = useSelector(state => state.order.orders);
    const searchText = useSelector(state => state.order.searchText);
    const statusFilter = useSelector(state => state.order.statusFilter);

    let filteredData = Utils.filterArrayByString(orderData, searchText);
    filteredData = Utils.filterArrayByString(filteredData, statusFilter);

    const columns = [
        {
          title: 'Order Id',
          dataIndex: 'order_id',
        },
        {
          title: 'Order Date',
          dataIndex: 'order_date',
        },
        {
          title: 'Amount Paid',
          dataIndex: 'amount_paid',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Total',
            dataIndex: 'total',
        },
      ];


    return (
        <div className="table-responsive">
            <Table
            rowClassName={() => 'editable-row'}
            bordered
            dataSource={filteredData}
            columns={columns}
            />
        </div>
    );
};

export default TableOrdersItems;
