import styled from 'styled-components';
import TextGradient from '@/components/TextGradient';
import Shell from '@/components/Shell';
import { blue, orangeYellow, purplePink, redPink } from '@/lib/gradients';

export default function Home() {
  return (
    <HomePage>
      <Title>
        <TextGradient linearGradient={redPink}>Contextualize</TextGradient>;{' '}
        <TextGradient linearGradient={purplePink}>Execute</TextGradient>;{' '}
        <TextGradient linearGradient={blue}>Test</TextGradient>;{' '}
        <TextGradient linearGradient={orangeYellow}>Repeat</TextGradient>;
      </Title>
      <Subtitle>
        Harness the power of a{' '}
        <TextGradient linearGradient={redPink}>context-aware</TextGradient> LLM,
        granting it{' '}
        <TextGradient linearGradient={purplePink}>+xwr</TextGradient>{' '}
        privileges, and allowing it to write your code automatically all the way
        to <TextGradient linearGradient={orangeYellow}>completion</TextGradient>
        .
      </Subtitle>
      <Shell />
    </HomePage>
  );
}

const HomePage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 500;
  margin-bottom: 20px;

  @media (max-width: 450px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.h4`
  font-size: 24px;
  font-weight: 400;
  color: #a3a9b2;
  width: 70%;
  margin-bottom: 80px;

  @media (max-width: 450px) {
    font-size: 12px;
    width: 100%;
  }
`;
