import styled from 'styled-components';

export default function Logo() {
  return <LogoText>🔥 Torch</LogoText>;
}

const LogoText = styled.h4`
  font-size: 26px;

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;
