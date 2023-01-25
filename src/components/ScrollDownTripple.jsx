import styled from 'styled-components';

export function ScrollDownTripple({className, onClick}) {
  return (
    <Container className={className} onClick={onClick}>
      <div>
        <span className="top-arrow arrow">&gt;</span>
      </div>
      <div>
        <span className="middle-arrow arrow">&gt;</span>
      </div>
      <div>
        <span className="bottom-arrow arrow">&gt;</span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 5px;
  transform: rotate(90deg);
  width: 30px;
  height: 30px;
  position: relative;

  .arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    font-size: 1.8rem;
    font-weight: 600;
    display: flex;
    animation-name: rollDownTripple;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  .top-arrow {
    animation-delay: -1.8s;
  }

  .middle-arrow {
    animation-delay: -2.4s;
  }

  .bottom-arrow {
    animation-delay: -3s;
  }

  @keyframes rollDownTripple {
    0% { 
      opacity: 0;
      transform: translate(0, 0);
    }
    50% {
      opacity: 0.6;
    }
    100% {
      opacity: 0.1;
      transform: translate(30px, 0);
    }
  }

`;