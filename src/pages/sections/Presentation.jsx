import styled from 'styled-components';
import { ScrollDownTripple } from '../../components/ScrollDownTripple';
import { ScrollDown } from '../../components/ScrollDown';

export function Presentation() {

  return (
    <Container>
      <div>Welcome to my portfolio!</div>
      <div className="text-content-wrapper">
        <h1>
          Hello! I'm Pedro Braghin
          <span className="blink"></span>
        </h1>
        <span className="subtitle">Full-Stack developer</span>
      </div>
      <div className="scroll-down-box">
        <span className="scroll-down-text">Scroll down to check my abilities and knowledge.</span>
        <ScrollDownTripple className="scrollDown" />
        {/* <ScrollDown className="scrollDown"/> */}
      </div>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: #000;
  position: relative;
  padding: 2rem 0rem;
  .text-content-wrapper {
    text-align: center;

    h1 {
      font-family: monospace;
      animation: typing 3s steps(46, end), blink .8s step-end infinite alternate;
      position: relative;
      display: flex;
      justify-content: left;
      align-items: center;
      gap: 0.4rem;
      height: 80%;
      border-right: 3px solid;
      overflow: hidden;
      white-space: nowrap;
      margin: 0 auto;
    }

    .subtitle {
      opacity: 0.8;
    }

    @keyframes typing {
      from { 
        width: 0 
      }
      to { 
        width: 100% 
      }
    }

    @keyframes blink {
      50% {
        border-color: transparent
      }
    }
  }

  .scroll-down-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: opacity 200ms linear;
    text-align: center;
    opacity: 0.6;
    transition: all 200ms ease-in-out;

    .scroll-down-text {
      color: var(--dark-gold);
      background: linear-gradient(to right, var(--dark-gold) 40%, var(--light-gold) 70%, var(--dark-gold) 80%);
      background-size: 200% auto;
    
      background-clip: text;
      text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      
      animation-name: shine;
      animation-duration: 4s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;

      @keyframes shine {
        to {
          background-position: -200% center;
          opacity: 1;
        }
      }
    }

    &:hover {
      opacity: 1;
      color: var(--regular-gold);
    }
  }
`;
