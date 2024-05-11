import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Space, Table } from 'antd';
import { Button, Dropdown } from 'antd';
import React from 'react'
import { CopyOutlined } from '@ant-design/icons';

export default function History() {
  const handleMenuClick = (e) => {
    console.log('click', e);
  };
  const items = [
    {
      label: '1',
      key: '1',
      icon: <UserOutlined />,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const columns = [
    {
      title: 'Event ID',
      dataIndex: 'ID', width: 170,
      key: 'ID', fixed: 'left',
      render: (_) => <span >{_}<CopyOutlined style={{ color: '#00D889', marginLeft: '8px', cursor: "pointer" }} /> </span>,
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      width: 100,
      render: (_) => <div style={{ width: '90px' }}>{_}</div>
    },
    {
      title: 'Order ID',
      dataIndex: 'Order',
      key: 'Order',
    },
    {
      title: 'Type',
      key: 'type',
      dataIndex: 'type',
      render: (_) => <div style={{ color: '#00D889' }}>{_}</div>
    },
    {
      dataIndex: 'Token',
      title: 'Token',
      key: 'Token',
    },
    {
      title: 'Price',
      dataIndex: 'Price',
      key: 'Price',
      render: (e, _) => <div > <span style={{ color: '#F35700' }}>{_.Price}</span><br /><span style={{ color: '#8B8B8B' }}>{_.Price1}</span></div>
    },
    {
      title: 'Remaining',
      dataIndex: 'Remaining',
      key: 'Remaining',
    },
    {
      title: 'Amount',
      dataIndex: 'Amount',
      key: 'Amount',
    },
    {
      title: 'Address',
      dataIndex: 'Address', width: 170,
      key: 'Address',
      render: (_) => <span >{_}<CopyOutlined style={{ color: '#00D889', marginLeft: '8px', cursor: "pointer" }} /> </span>,
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      key: 'Status',
      render: (_) => {
        return _ === 'clairri' ? <Button className='qs' shape='round' style={{ background: '#00D889' }}>{_}</Button> : <span>{_}</span>
      },
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action', fixed: 'right',
      render: () => <a style={{ color: '#00D889' }}>Delete</a>,
    },
  ];
  const data = [
    {
      key: '1',
      ID: 'note1475...q6ex9r',
      time: '2024-03-01 15:57:53',
      Order: '1709279873249',
      type: 'BUY',
      Token: 'TRICK',
      Price: '309 SAT5',
      Price1: '≈$0.0819',
      Remaining: '2,000',
      Amount: '2,000',
      Address: 'note1475...q6ex9r',
      Status: 'clairri',
      Action: 'Detail'
    },
    {
      key: '1',
      ID: 'note1475...q6ex9r',
      time: '2024-03-01 15:57:53',
      Order: '1709279873249',
      type: 'BUY',
      Token: 'TRICK',
      Price: '309 SAT5',
      Price1: '≈$0.0819',
      Remaining: '2,000',
      Amount: '2,000',
      Address: 'note1475...q6ex9r',
      Status: 'finish',
      Action: 'Detail'
    },
    {
      key: '1',
      ID: 'note1475...q6ex9r',
      time: '2024-03-01 15:57:53',
      Order: '1709279873249',
      type: 'BUY',
      Token: 'TRICK',
      Price: '309 SAT5',
      Price1: '≈$0.0819',
      Remaining: '2,000',
      Amount: '2,000',
      Address: 'note1475...q6ex9r',
      Status: 'Unfilled',
      Action: 'Detail'
    },
    {
      key: '1',
      ID: 'note1475...q6ex9r',
      time: '2024-03-01 15:57:53',
      Order: '1709279873249',
      type: 'BUY',
      Token: 'TRICK',
      Price: '309 SAT5',
      Price1: '≈$0.0819',
      Remaining: '2,000',
      Amount: '2,000',
      Address: 'note1475...q6ex9r',
      Status: 'Processing',
      Action: 'Detail'
    },

  ];
  return (
    <div className='order'>
      <div className='ltop'>
        <div className='l'>
          <Dropdown menu={menuProps}>
            <Button style={{ border: '1px solid #5c5c5c', color: '#fff' }} ghost>
              <Space>
                Buy/Sell
                <DownOutlined style={{ fontSize: '10px' }} />
              </Space>
            </Button>
          </Dropdown>
          <Dropdown menu={menuProps}>
            <Button style={{ border: '1px solid #5c5c5c', color: '#fff' }} ghost>
              <Space>
                All Token
                <DownOutlined style={{ fontSize: '10px' }} />
              </Space>
            </Button>
          </Dropdown>
          <Dropdown menu={menuProps}>
            <Button style={{ border: '1px solid #5c5c5c', color: '#fff' }} ghost>
              <Space>
                All Status
                <DownOutlined style={{ fontSize: '10px' }} />
              </Space>
            </Button>
          </Dropdown>
        </div>
        <div className='r'>
          <Button type="link">
            Make a pool
          </Button>
        </div>
      </div>
      <div className='tables'><Table scroll={{
        x: 1300,
      }} columns={columns} dataSource={data} />;</div>
    </div>
  )
}
