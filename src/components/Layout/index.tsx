import React from 'react';
import Main from '../Main';
import Menubar from '../Menubar';
import Sidebar from '../Sidebar';
import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Menubar />
        <Main />
        <Sidebar />
      </Wrapper>
    </Container>
  );
};

export default Layout;
