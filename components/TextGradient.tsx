import styled from 'styled-components';

interface TextGradientProps {
  linearGradient: string;
  children: React.ReactNode;
}

export default function TextGradient({
  linearGradient,
  children,
}: TextGradientProps) {
  return <Gradient linearGradient={linearGradient}>{children}</Gradient>;
}

const Gradient = styled.span<{ linearGradient: string }>`
  background: ${(props) => props.linearGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
