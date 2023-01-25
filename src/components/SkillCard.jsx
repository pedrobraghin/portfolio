import styled from 'styled-components';

export function SkillCard({skillName, description, experienceTime}) {
  return (
    <Container>
      <span className='skill-name'>{skillName}</span>
      <p className='skill-description'>{description}</p>
      <span className='experience-time'>Time experience: {experienceTime}</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  max-width: 38vw;
  width: 100%;
  height: 150px;
  border-radius: 5px;
  background-color: rgba(25, 25, 25, 0.8);
  padding: 1rem;
  transition: all 100ms linear;
  color: #f4f4f4;
  
  &:hover {
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.4);
    background-color: #000;
    transform: scale(1.01);

    .skill-name {
      color: var(--regular-gold);
    }
  }

  .skill-name {
    font-size: 1.2rem;
    transition: all 50ms ease-in-out;
  }

  .skill-description {
    font-size: 1rem;
  }

  .experience-time {
    color: #575757;
  }

  @media screen and (max-width:933px) {
    max-width: 80vw;
  }

`;