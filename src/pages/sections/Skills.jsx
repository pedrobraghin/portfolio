import styled from 'styled-components';
import skills from '../../../skills.json';
import { SkillCard } from '../../components/SkillCard';

export function Skills() {
  return(
    <Container>
      <h1>Skills</h1>
      <SkillsWrapper className='skills-container'>
      {
        skills.list.map((skill, index) => {
          return <SkillCard skillName={skill.skillName} description={skill.description} experienceTime={skill.experienceTime} key={index}/>
        })
      }
      </SkillsWrapper>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const SkillsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;