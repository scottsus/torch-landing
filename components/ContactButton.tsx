import Link from 'next/link';
import styled from 'styled-components';

interface ButtonProps {
  url: string;
  iconUrl: string;
  text: string;
  textColor?: string;
  backgroundColor: string;
}

export default function ContactButton({
  url,
  iconUrl,
  text,
  textColor = '#fff',
  backgroundColor,
}: ButtonProps) {
  return (
    <LinkContainer>
      <Link href={url} target="_blank">
        <ButtonContainer backgroundColor={backgroundColor}>
          <Icon src={iconUrl} />
          <Text color={textColor}>{text}</Text>
        </ButtonContainer>
      </Link>
    </LinkContainer>
  );
}

const LinkContainer = styled.div`
  padding: 0;
  &:not(:last-child) {
    margin-right: 40px;
  }
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 0 60px -5px #2650e4;
    color: red;
  }
`;

const ButtonContainer = styled.button<{ backgroundColor: string }>`
  height: 64px;
  padding: 10px 30px;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  height: 40px;
  margin-right: 20px;
`;

const Text = styled.h5<{ color: string }>`
  font-size: 20px;
  color: ${(props) => props.color};
  text-align: left;
`;
