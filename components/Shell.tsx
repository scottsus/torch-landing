import styled from 'styled-components';

interface ShellProps {
  //   commands: string[];
}

export default function Shell({}: ShellProps) {
  return (
    <ShellContainer>
      <Command>
        <SyntaxGreen>brew</SyntaxGreen> install scottsus/scottsus/torch
      </Command>
      <Command>
        <SyntaxGreen>torch</SyntaxGreen> shell
      </Command>
      <Command>
        Wtf is torch?{' '}
        <SyntaxGrey># Literally type this into your cli</SyntaxGrey>
      </Command>
    </ShellContainer>
  );
}

const ShellContainer = styled.div`
  width: 790px;
  padding: 20px 17px;
  background-color: #292f38;
  border-radius: 15px;
  box-shadow: 0 0 60px -15px #2650e4;

  @media (max-width: 450px) {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
  }
`;

const Command = styled.p`
  font-size: 20px;
  font-family: Monaco, Arial;
  letter-spacing: -1px;
  color: #fff;
  &:not(:last-child) {
    margin-bottom: 5px;
  }

  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

const SyntaxGreen = styled.span`
  color: #42e53e;
`;

const SyntaxGrey = styled.span`
  color: #5d6876;
`;
