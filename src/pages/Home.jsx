import styled from 'styled-components';
import { SocialLinksFloatBar } from '../components/SocialLinksFloatBar';
import { Presentation } from './sections/Presentation';
import { AboutMe } from './sections/AboutMe';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';

export function Home() {
  return (
    <Container>
      <SocialLinksFloatBar />
      <Presentation/>
      <Content>
        <AboutMe />
        <Skills />
        <Projects />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Content = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
  gap: 2rem;

  section {
    padding: 2rem 2rem;
  }

  @media screen and (max-width: 481px) {
    section {
      padding: 2rem 0;
    } 
  }
`;