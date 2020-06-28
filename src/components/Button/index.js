import React from 'react'
import { Button as AntdButton } from 'antd'

const Button = ({ onClick, ...props }) => (
  <AntdButton onClick={onClick} {...props} />
)

export default Button
