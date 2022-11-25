import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  .bg-white {
    background-color: white;
    padding: 1vw 0;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  padding: 0 112px;
  img {
    width: 223px;
  }
  #info {
    margin: 37px;
    h2 {
      font-size: 37px;
    }
    span {
      font-family: 'Poppins';
      font-size: 22px;
    }
    p {
      font-family: 'Poppins';
      font-size: 18px;
    }
  }
  #quant {
    /* padding: 2px 30px; */
    position: relative;
    left: 521px;
    display: flex;
    align-content: center;
    flex-wrap: nowrap;
    align-items: center;
    border: 1px solid;
    font-size: 26px;
    justify-content: space-evenly;
    button {
      font-size: 24px;
      color: white;
      border: none;
      /* margin: 4px; */
      width: 32px;
      height: 32px;
    }
    #left {
      background: red;
      margin-right: 12px;
    }
    #right {
      background: green;
      margin-left: 12px;
    }
  }
  border-bottom: 1px solid;
`;
export const Head = styled.div`
  height: 82vh;

  img {
    position: absolute;
    top: 0;
    width: 100vw;
    z-index: -1;
  }
  #title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 8vw;
    position: relative;
    margin: 0 5.3vw;
    #sub-title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      p {
        font-size: 3vw;
      }
      h3 {
        font-size: 6vw;
      }
    }
    #path {
      display: flex;
      width: 8vw;
      justify-content: space-between;
      font-family: 'Poppins';
      margin-bottom: 1vw;
      span {
        color: #187fe7;
      }
    }
    #line {
      border: 1px solid;
    }
  }
`;
