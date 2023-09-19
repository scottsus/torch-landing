'use client';

import styled from 'styled-components';
import Navbar from '@/components/Navbar';
import Home from './home';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <PageContainer>
      <Navbar />
      <Home />
      <Footer />
    </PageContainer>
  );
}

const PageContainer = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
