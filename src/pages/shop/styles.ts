import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  .bg-white {
    background-color: white;
    padding: 1vw 0;
  }
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
export const Seach = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  margin: 0 6vw;
  div {
    display: flex;
    justify-content: space-between;
    width: 40vw;
  }
  #input {
    border: 1px solid;
    display: flex;
    padding: 15px;
    align-items: center;
    width: 300px;
    input {
      background: none;
      border: none;
      font-family: 'Poppins';
    }
    svg {
      font-size: 24px;
    }
  }
`;
export const ListProducts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  img {
    height: 214px;
    object-fit: none;
    margin-bottom: 16px;
  }
  h3 {
    width: 12vw;
    font-size: 22px;
  }
  .price {
    margin: 0;
    font-family: 'Poppins';
  }
  div {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    margin: 31px;
    align-items: center;
    span {
      color: #187fe7;
      font-size: 21px;
    }
    p {
      text-decoration: line-through;
      color: #b82e24;
    }
    button {
      font-family: 'headline-gothic-atf';
      padding: 5px;
      font-size: 22px;
      background: transparent;
      border: 1px solid #000000;
      color: #000000;
      transition: 0.3s;
      &:hover {
        background: #000000;
        color: #18e755;
      }
    }
  }
`;
