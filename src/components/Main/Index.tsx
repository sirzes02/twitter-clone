import React from 'react';

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BotttomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';
import ProfilePage from '../ProfilePage';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Santiago Varela</strong>
          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BotttomMenu>
        <HomeIcon className="Active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BotttomMenu>
    </Container>
  );
};

export default Main;
