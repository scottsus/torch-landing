import styled from 'styled-components';
import ContactButton from './ContactButton';

export default function Footer() {
  return (
    <FooterContainer>
      <Buttons>
        <ContactButton
          url="https://github.com/scottsus/torch-landing"
          iconUrl="icons/github.svg"
          text="Open-Source"
          textColor="#000"
          backgroundColor="#fff"
        />
        <ContactButton
          // TODO: Update Discord Link
          url="https://github.com/scottsus/torch-landing"
          iconUrl="icons/discord.svg"
          text="Join the community"
          backgroundColor="#404EED"
        />
        <ContactButton
          // TODO: Update Twitter Link
          url="https://github.com/scottsus/torch-landing"
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

  @media (max-width: 450px) {
    height: 180px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;
