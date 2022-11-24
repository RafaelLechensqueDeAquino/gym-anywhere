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
        font-size: 27px;
        margin-bottom: 30px;
      }
      span,
      a {
        font-family: 'Poppins';
        font-size: 16px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;

        text-align: justify;
        max-width: 19vw;
        svg {
          margin-right: 10px;
          justify-content: space-between;
          max-width: 150px;
        }
      }
      .card-link {
        img {
          width: 4vw;
          border-radius: 8px;
        }
        div {
          margin-left: 4px;
          display: flex;
          flex-direction: column;
          h3 {
            font-size: 1.5vw;
            width: 117px;
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
