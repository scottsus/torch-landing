import styled from 'styled-components';

interface ButtonProps {
  iconUrl: string;
  text: string;
  textColor?: string;
  backgroundColor: string;
}

export default function ContactButton({
  iconUrl,
  text,
  textColor = '#fff',
  backgroundColor,
}: ButtonProps) {
  return (
    <ButtonContainer backgroundColor={backgroundColor}>
      <Icon src={iconUrl} />
      <Text color={textColor}>{text}</Text>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button<{ backgroundColor: string }>`
  height: 64px;
  padding: 10px 30px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    margin-right: 40px;
  }
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 0 60px -5px #2650e4;
    color: red;
  }
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
