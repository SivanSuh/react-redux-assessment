import React from "react";
import styled from "styled-components";

const NavbarComponent = styled.div`
  width: 100%;
  height: 70px;
  background-color: black;
  display: flex;
  padding: 5px;
  justify-content: space-around;
  align-items: center;
  color: white;
`;
const Logo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;
const LogoName = styled.h3`
  margin: 0 10px;
`;
const Navbar = () => {
  return (
    <NavbarComponent>
      <Logo
        src="https://media-exp1.licdn.com/dms/image/C4D0BAQEUM8B4HQi2-A/company-logo_200_200/0/1532249937732?e=1657152000&v=beta&t=84yPZXKhANDBikbqG6EiAnREW5G3wbBN-5DOqdgD4rM"
        alt="foto"
      />

      <LogoName>Rise Technology, Consulting Academy</LogoName>
    </NavbarComponent>
  );
};

export default Navbar;
