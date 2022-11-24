import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  .bg-white {
    background-color: white;
    padding: 1vw 0;
  }
`;

export const Head = styled.div`
  img {
    position: absolute;
    top: 0;
    width: 100vw;
    z-index: -1;
  }

  #title {
    font-family: 'headline-gothic-atf';
    position: relative;
    margin: 3vw 0 0 15vw;

    h1 {
      font-size: 10vw;
    }
    button {
      font-family: 'headline-gothic-atf';
      font-size: 3vw;
      padding: 12px 24px;
      background-color: white;
      border: 2px solid white;
      color: black;
    }
  }
  @media screen and (max-width: 768px) {
    #title {
      margin-left: calc(50vw - 25px);
      display: flex;
      flex-direction: column;
      /* margin: 27px 0; */
      /* justify-content: center; */
      button {
        /* font-size: 3vw;
      padding: 1.5vw 1vw;*/
        max-width: 39%;
        padding: 2% 4%;
      }
    }
  }
`;

export const Info = styled.div`
  position: relative;
  width: 85vw;
  left: 10vw;
  top: 10vw;
  margin-bottom: 12vw;

  display: flex;
  flex-direction: column;
  #about {
    display: flex;
    flex-direction: row;
    img {
      width: 36vw;
    }
    div {
      margin-bottom: 12px;
      margin-left: 12px;

      display: flex;
      flex-direction: column;

      align-items: flex-start;
      /* justify-content: space-between; */

      h3 {
        margin-top: 73px;
        font-size: 42px;
      }
      h1 {
        margin-top: 20px;
        font-size: 70px;
      }
      span {
        font-family: 'Poppins';
        font-weight: 400;
        font-size: 24px;
        color: gray;
      }

      #list-icon {
        margin-bottom: 24px;
        margin-top: 12px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        svg {
          margin-right: 8px;
          font-size: 28px;
        }
      }
      p {
        margin-bottom: 24px;

        font-family: 'Poppins';
        font-weight: 300;
        color: black;
        font-size: 22px;

        width: 37vw;
        text-align: justify;

        margin-left: 12px;
      }

      button {
        margin-left: 12px;
        background-color: transparent;
        border: 2px solid black;
        text-align: center;
        a {
          font-family: 'headline-gothic-atf';
          color: black;
          font-size: 26px;
        }
        padding: 8px 20px;
      }
    }
  }
  #foot-info {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
    margin: 3vw 0;
    .ic {
      display: flex;
      flex-direction: column;
      align-items: center;
      svg {
        font-size: 5vw;
        margin: 3vw;
      }
      span {
        font-size: 2.5vw;
        text-align: justify;
        max-width: 19vw;
      }
    }
  }
  @media screen and (max-width: 768px) {
    left: 2vw;
    #about {
      img {
        object-fit: cover;
      }
      div {
        h3 {
          margin-top: 20px;
          font-size: 5vw;
        }
        h1 {
          margin-top: 10px;
          font-size: 8vw;
        }
        span {
          font-size: 3vw;
        }

        #list-icon {
          margin-top: 0;
          svg {
            font-size: 4vw;
          }
        }
        p {
          width: 50vw;
          font-size: 3vw;
        }
        button {
          padding: 1vw 2vw;
          a {
            font-size: 3.5vw;
          }
        }
      }
    }
  }
`;

export const Classes = styled.div`
  position: relative;
  width: 85vw;
  left: 10vw;
  #head-class {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 38px 0;

    h2 {
      font-size: 6vw;
    }
    button {
      margin-left: 12px;
      background-color: transparent;
      border: 2px solid black;
      text-align: center;
      a {
        font-family: 'headline-gothic-atf';
        color: black;
        font-size: 30px;
        text-align: center;
      }
      padding: 5px 50px;
    }
  }
  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 768px) {
    left: 2vw;

    #head-class {
      h2 {
        font-size: 9vw;
      }
      button {
        padding: 0.5vw 5vw;
        a {
          font-size: 4vw;
        }
      }
    }
  }
`;
