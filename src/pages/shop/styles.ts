import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
`;
export const Head = styled.div`
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
export const Seach = styled.div``;
export const Product = styled.div``;
