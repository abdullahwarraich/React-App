import React from 'react'
import { Table as AntdTable } from 'antd'

const Table = ({ columns, data, loading }) => (
  <AntdTable
    bordered
    rowKey={record => record._id}
    columns={columns}
    dataSource={data}
    loading={loading}
  />
)

export default Table
