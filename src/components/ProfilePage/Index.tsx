import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './Styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar Perfil</EditButton> */}

        <h1>Santiago Varela</h1>
        <h2>@Sirzes02</h2>

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
    </Container>
  );
};

export default ProfilePage;
