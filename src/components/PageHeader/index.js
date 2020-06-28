import React from 'react'
import { PageHeader as Header } from 'antd'
import { HeaderContainer } from './style'

const PageHeader = ({ title, ...props }) => (
  <HeaderContainer>
    <Header title={title} {...props} />
  </HeaderContainer>
)

export default PageHeader
