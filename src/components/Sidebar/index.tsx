import React from 'react';
import StickyBox from 'react-sticky-box';
import FollowSugestion from '../FollowSugestion';
import List from '../List';
import News from '../News';
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './Styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar en twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Primera prueba de titulo"
            elements={[
              <FollowSugestion name="Oscar Varela" nickname="@oscarVarela" />,
              <FollowSugestion name="Lucened Mejia" nickname="@lucenedMejia" />,
              <FollowSugestion name="Stefany Yaten" nickname="@stefanyYaten" />,
            ]}
          />
          <List
            title="Segunda prueba de titulo"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Segunda prueba de titulo"
            elements={[<News />, <News />, <News />, <News />, <News />]}
          />
          <List
            title="Segunda prueba de titulo"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default Sidebar;
