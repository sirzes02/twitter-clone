import React from 'react';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './Styles';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h2>Santiago Varela</h2>
        <h1>@Sirzes02</h1>

        <p>
          Developer at <a href="https://cvsirzes.herokuapp.com/">Sirzes</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Cali, Colombia
          </li>
          <li>
            <CakeIcon />
            Nacido(a) el 02 de mayo de 2000
          </li>
        </ul>

        <Followage>
          <span>
            siguiendo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong>seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
