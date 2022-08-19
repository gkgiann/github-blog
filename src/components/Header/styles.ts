import styled from "styled-components";

import backgroundImg from "../../assets/header-background.svg";

export const HeaderContainer = styled.header`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  height: 29.6rem;

  text-align: center;

  img {
    margin-top: 6.4rem;
  }
`;
