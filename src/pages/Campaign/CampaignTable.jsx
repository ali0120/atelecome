import React, { useState } from 'react';
import { Table, Input, Button, Space } from 'antd';

const { Search } = Input;

const CampaignTable = ({tableData}) => {
  const [searchText, setSearchText] = useState('');
  const [collapsedRows, setCollapsedRows] = useState([]);

  const { items } = {
    "succeeded": true,
    "message": null,
    "errors": null,
    "data": {
      "items": [
        {
          "id": 222,
          "campaigName": "Kiro TA",
          "startDate": "2023-06-07T16:06:26.9123041",
          "creationDate": "2023-06-07T16:06:26.9163366",
          "senderName": "TATelecom",
          "campaignType": 0,
          "message": "Test",
          "totalCharacters": 4,
          "recipientCount": 1,
          "totalMessages": 1,
          "delivered": 1,
          "pending": 0,
          "failed": 0,
          "status": 1
        },
      ],
      "pageNumber": 1,
      "totalPages": 6,
      "totalCount": 52,
      "hasPreviousPage": false,
      "hasNextPage": true
    }
  };

  const handleTableChange = (pagination, filters, sorter) => {
  };

  const handleSearch = value => {
    setSearchText(value);
  };

  const handleRowExpand = (expanded, record) => {
    if (expanded) {
      setCollapsedRows(prevState => [...prevState, record.id]);
    } else {
      setCollapsedRows(prevState => prevState.filter(rowId => rowId !== record.id));
    }
  };

  const columns = [
    {
      title: 'Campaign Name',
      dataIndex: 'campaigName',
      key: 'campaigName',
      sorter: (a, b) => a.campaigName.localeCompare(b.campaigName),
      render: (text, record) => (
        <span style={{ fontWeight: collapsedRows.includes(record.id) ? 'bold' : 'normal' }}>
          {text}
        </span>
      ),
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'Sender Name',
      dataIndex: 'senderName',
      key: 'senderName',
    },
  ];

  const data = items?.map(item => ({ ...item, key: item.id }));

  // Filter the data based on search text
  const filteredData = data?.filter(
    item =>
      item.campaigName.toLowerCase().includes(searchText.toLowerCase()) ||
      item.senderName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Search placeholder="Search" onSearch={handleSearch} enterButton />
      </Space>
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{
          total: filteredData?.length,
          pageSize: 10,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
          showSizeChanger: true,
        }}
        onChange={handleTableChange}
        expandable={{
          expandedRowRender: record => (
            <p style={{ margin: 0 }}>Message: {record.message}</p>
          ),
          expandedRowKeys: collapsedRows,
          onExpand: handleRowExpand,
          rowExpandable: record => record.message !== null,
        }}
      />
    </div>
  );
};

export default CampaignTable;
