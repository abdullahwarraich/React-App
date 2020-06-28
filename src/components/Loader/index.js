import React from 'react'
import { Spin } from 'antd'
import { SpinerContainer } from './style'

const Loader = () => (
  <SpinerContainer>
    <Spin />
  </SpinerContainer>
)

export default Loader
