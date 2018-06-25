
import { Divider, Icon, Table  } from 'antd';
import * as React from 'react';

const columns = [{
    dataIndex: 'name',
    key: 'name',
    render: (t:string) => <a href="javascript:;">{t}</a>,
    title: 'Name',
  }, {
    dataIndex: 'age',
    key: 'age',
    title: 'Age',
  }, {
    dataIndex: 'address',
    key: 'address',
    title: 'Address',
  }, {
    key: 'action',
    render: (text:string, record:any) => (
      <span>
        <a href="javascript:;">Action 一 {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
        <Divider type="vertical" />
        <a href="javascript:;" className="ant-dropdown-link">
          More actions <Icon type="down" />
        </a>
      </span>
    ),
    title: 'Action',
  }];
  
  const data = [{
    address: 'New York No. 1 Lake Park',
    age: 32,
    key: '1',
    name: 'John Brown',
  }, {
    address: 'London No. 1 Lake Park',
    age: 42,
    key: '2',
    name: 'Jim Green',
  }, {
    address: 'Sidney No. 1 Lake Park',
    age: 32,
    key: '3',
    name: 'Joe Black',
  }];
class AntTable extends React.Component {
    public render() {
        return (
            <Table columns={columns} dataSource={data} />
        );
      }
}

export default AntTable;