import styled from 'styled-components';
import ContactButton from './ContactButton';

export default function Footer() {
  return (
    <FooterContainer>
      <Buttons>
        <ContactButton
          iconUrl="icons/github.svg"
          text="Open-Source"
          textColor="#000"
          backgroundColor="#fff"
        />
        <ContactButton
          iconUrl="icons/discord.svg"
          text="Join the community"
          backgroundColor="#404EED"
        />
        <ContactButton
          iconUrl="icons/twitter.svg"
          text="Keep in touch"
          backgroundColor="#000"
        />
      </Buttons>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;
