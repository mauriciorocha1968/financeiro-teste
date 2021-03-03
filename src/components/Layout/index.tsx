import React from 'react'
import Aside from '../../components/Aside'
import Content from '../../components/Content'
import MainHeader from '../../components/MainHeader'
import { Grid } from './styles'

const Layout: React.FC = ({children}) => {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content>
        {children}
      </Content>
    </Grid>
  )
}

export default Layout
