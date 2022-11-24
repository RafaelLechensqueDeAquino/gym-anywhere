import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 26vw;
  }
  h2 {
    margin: 2vw 0;
    font-size: 2.5vw;
  }
  p {
    font-family: 'Poppins';
    font-weight: 300;
    color: black;
    font-size: 1.5vw;
    width: 26vw;
    text-align: justify;
  }
  a {
    font-family: 'headline-gothic-atf';
    color: #404b78;
    font-size: 26px;
    margin: 1.5vw 0;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 2vw;
    img {
      width: 38vw;
    }
    h2 {
      font-size: 4vw;
      margin: 4vw 0;
    }
    p {
      width: 38vw;
      font-size: 2.5vw;
    }
    a {
      font-size: 3.5vw;
      margin: 3vw 0;
    }
  }
`;
