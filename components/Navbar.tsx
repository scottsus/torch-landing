import styled from 'styled-components';
import Logo from './Logo';

export default function Navbar() {
  return (
    <NavbarContainer>
      <Logo />
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #30363d;

  @media (max-width: 450px) {
    height: 50px;
  }
`;
