import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 85vw;
  margin: 3vw 9vw;
  display: flex;
  flex-direction: column;

  #main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 86vw;

    .column {
      display: flex;
      flex-direction: column;
      h3 {
        font-size: 1.8vw;
        margin-bottom: 2vw;
      }
      span {
        flex-wrap: wrap;
      }
      span,
      a {
        font-family: 'Poppins';
        font-size: 1.12vw;
        margin-bottom: 0.75vw;
        display: flex;
        align-items: center;

        text-align: justify;
        max-width: 19vw;
        svg {
          margin-right: 1vw;
          font-size: 2vw;
          justify-content: space-between;
          max-width: 150px;
        }
      }
      #networks {
        display: flex;
        justify-content: space-between;
        width: 11vw;
      }
      .card-link {
        img {
          width: 4vw;
          border-radius: 8px;
        }
        div {
          margin-left: 1vw;
          display: flex;
          flex-direction: column;
          h3 {
            font-size: 1.5vw;
            width: 8vw;
            margin: 0;
            font-family: 'headline-gothic-atf';
          }
          p {
            font-size: 1vw;
          }
        }
      }
      form {
        display: flex;
        flex-direction: column;
        input {
          padding-left: 8px;
          height: 3vw;
          border: 2px solid white;
          color: gray;
          font-family: 'Poppins';
          margin-bottom: 20px;
        }
        button {
          height: 40px;
          border: 2px solid #404b78;
          background-color: #404b78;
          color: #ced2da;
          font-family: 'headline-gothic-atf';
          font-size: 21px;
          margin-bottom: 50px;
        }
        p {
          font-family: 'Poppins';
          font-size: 10px;
          font-weight: 200;
        }
      }
    }
  }
  #line {
    border: 0.5px solid #373a47;
  }
  #final {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p {
      display: flex;
      align-items: center;
      span {
        font-family: 'Poppins';
        padding: 1px 0;
      }
    }
  }
`;
