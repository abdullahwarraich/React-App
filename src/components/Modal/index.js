import React from 'react'
import { Modal as AntdModal } from 'antd'

const Modal = ({ header, visible, onOk, onCancel, children, ...props }) => (
  <AntdModal
    title={header}
    visible={visible}
    onOk={onOk}
    onCancel={onCancel}
    {...props}
  >
    {children}
  </AntdModal>
)

export default Modal
