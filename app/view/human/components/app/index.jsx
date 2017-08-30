import React from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { Row, Col, Table, Popconfirm, Button, Input } from 'antd';
const Search = Input.Search;

import EditModal from '../editModal';

class App extends React.Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      modalTitle: '',
      modalVisible: false,
      rowData: {},
      data: [],
      token: '',
      columns: [{
        title: '姓名',
        dataIndex: 'name',

      }, {
        title: '年龄',
        dataIndex: 'age',
      }, {
        title: '备注',
        dataIndex: 'note',
      }, {
        title: '操作',
        dataIndex: 'operation',
        render: this.cellEditRender,
      }],
    };
  }

  cellEditRender = (text, record, index) => {
    return (
      <span>
        <Popconfirm title="真的要丢弃这个人么?" onConfirm={() => this.onDelete(record)}>
          <a href="#">删除</a>
        </Popconfirm>
        <span className="ant-divider" />
        <a href="#" onClick={() => this.setEditModalVisible(true, record)}>编辑</a>
      </span>
    );
  }

  onDelete = (record) => {

    const { cookies } = this.props;
    const token = cookies.get('csrfToken');

    fetch('/human/delete', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token,
      },
      body: JSON.stringify({ id: record.id }),
    }).then(response => {
      this.setState({ rowData: {} });
      this.refresh();
      console.log(response);
    });
  }

  onSaveData = () => {

    console.log(this.state.rowData);

    const { cookies } = this.props;
    const token = cookies.get('csrfToken');

    if (this.state.rowData.id) {
      fetch('/human/update', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-Token': token,
        },
        body: JSON.stringify(this.state.rowData),
      }).then(response => {
        this.setState({ rowData: {} });
        this.refresh();
        console.log(response);
      });
    } else {
      fetch('/human/create', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-Token': token,
        },
        body: JSON.stringify(this.state.rowData),
      }).then(response => {
        this.setState({ rowData: {} });
        this.refresh();
        console.log(response);
      });
    }

    this.setState({ modalVisible: false });
  }


  refresh = () => {
    fetch('/human/get').then(response => {
      console.log(response);

      return response.json();
    }).then(data => {
      console.log(data);
      this.setState({ data });
    });
  }

  setModalVisible = (modalVisible) => {
    this.setState({ modalVisible });
    this.setState({ rowData: {} });
  }

  setEditModalVisible(modalVisible, rowData) {
    this.setState({ rowData });
    this.setState({ modalVisible });
  }

  componentDidMount() {
    this.refresh();
  }

  handleFormChange = (changedFields) => {
    console.log(1);

    const key = Object.keys(changedFields);

    const rowData = JSON.parse(JSON.stringify(this.state.rowData));

    rowData[key[0]] = changedFields[key[0]].value;

    this.setState({
      rowData,
    });
  }

  onSearch = (value) => {
    fetch('/human/get/' + value, {
    }).then(response => {
      console.log(response);

      return response.json();
    }).then(data => {
      console.log(data);
      this.setState({ data });
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={2}>
            <h1>人员列表</h1>
          </Col>
          <Col span={2}>
            <Search
              placeholder="请输入姓名"
              style={{ width: 200 }}
              onSearch={this.onSearch} />
          </Col>
          <Col span={20}>
            <Button className="new" type="primary" onClick={() => this.setModalVisible(true)}>新增</Button>
          </Col>
        </Row>
        <Row >
          <Col span={24}>
            <Table bordered dataSource={this.state.data} columns={this.state.columns} rowKey={'id'} />
          </Col>
        </Row>
        <EditModal
          {...this.state.rowData}
          onChange={this.handleFormChange}
          modalTitle={this.state.modalTitle}
          modalVisible={this.state.modalVisible}
          onCancel={() => this.setModalVisible(false)}
          onSave={this.onSaveData}
        ></EditModal>
      </div>
    );
  }
}

export default withCookies(App);
