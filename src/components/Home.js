import React from 'react';
import { Table } from 'antd';
import usersData from "./MOCK_DATA.json";
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'CreatedOn',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Owner',
    dataIndex: 'owner',
    key: 'owner',
  },
  {
    title: 'Action',
    key: 'views',
    render: (name) => <Link to={`/view?/${name.id}`} state={name.id}>View</Link>,
  }
];
const data = usersData;
const Home = () => {
  return (
    <div className='tableDiv'>
      <Table pagination={false} columns={columns} dataSource={data} rowKey={"id"} />
    </div>
  )
}
export default Home;