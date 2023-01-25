import styled from 'styled-components';

export function AboutMe() {
  return (
    <Container>
      <h1>About me</h1>
      <div className="content">
        <div className="left-col col">
          <p>
            I'm a college student in the course of Infomation Systems in a federal institution. I was started my studies in the programming area even not know what I was doing. In the beggining it was very incridible, and felt that it was for me, since then I'm very passionate about this world. Now, talking about my experiences, I'm currently I'm interning part-time at the <a href="https://compass.uol" target="_blank">Compass UOL</a> at the scolarship program. The main focus of the program is study about Node.js with TypeScript and AWS too. I think that a have a lot to learning yet.
          </p>
          <p>
            Talking a little bit about me as a common people, I like to learn about everything, I like music, do some travels, and many oner things. But, the main thing that a couldn't remove of my life is programming. Since that I realized that programming exists, this change my life to better. And, I believe that programming it will change much more. 
          </p>
          <p>
            Keep scrolling down and check some of my projects. If you want contact me, click in on of the links floating. Be very welcome in my portfolio, enjoy the travel!
          </p>
        </div>
        <div className="right-col col">
          <img src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="Pedro Braghin profile pic." />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  
  .content {
    display: flex;
    grid-template-columns: 1fr 1fr;
    text-align: justify;
    gap: 1rem;

    .col {
      max-height: 80vh;
      overflow: hidden;
    }
    
    .left-col {
      text-overflow: ellipsis;
      max-width: 50%;
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      
      p a {
        color: var(--regular-gold);
        &:hover {
          text-decoration: underline;
        }
      }
    }

    .right-col {
      width: 100%;
      
      & > img {
        transition: transform 5s ease-in-out;
        width: 100%;
        height: 100%;
        object-fit: cover;
        &:hover {
          transform: scale(1.1);
          filter: blur(1px);
        }
      }
    }
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;

      .col {
        max-width: 100%;
      }
    }
  }

`;