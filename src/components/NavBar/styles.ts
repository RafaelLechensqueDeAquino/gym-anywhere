import styled from 'styled-components';

export const Burgue = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: inline;
    position: absolute;
    top: 0;

    .bm-burger-button {
      position: absolute;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
    }

    /* Color/shape of burger icon bars */
    .bm-burger-bars {
      background: #373a47;
    }

    /* Color/shape of burger icon bars on hover*/
    .bm-burger-bars-hover {
      background: #a90000;
    }

    /* Position and sizing of clickable cross button */
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }

    /* Color/shape of close button cross */
    .bm-cross {
      background: #bdc3c7;
    }

    /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
    .bm-menu-wrap {
      position: fixed;
      height: 100%;
    }

    /* General sidebar styles */
    .bm-menu {
      background: #373a47;
      padding: 2.5em 1.5em 0;
      font-size: 1.15em;
    }

    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
      fill: #373a47;
    }

    /* Wrapper for item list */
    .bm-item-list {
      color: #b8b7ad;
      padding: 0.8em;

      display: flex;
      justify-content: space-around;
    }

    /* Individual item */
    .bm-item {
      display: inline-block;
    }

    /* Styling of overlay */
    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;
export const Line = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  align-items: center;

  padding: 20px 0;

  div {
    a {
      padding: 0 8px;
      color: black;
    }
  }

  h3 {
    color: black;
    font-size: 44px;
  }

  #list,
  #icons {
    transition-duration: 0.3s;

    font-size: 26px;
    svg {
      margin: 0 8px;
    }
    a,
    svg {
      transition-duration: 0.3s;
    }
    #icon-p:hover {
      color: #187fe7;
    }
    #icon-b:hover {
      color: #187fe7;
    }
    a:hover {
      color: #187fe7;
      #count {
        border: 1px solid #187fe7;
        background: #187fe7;
      }
    }
    #count {
      transition-duration: 0.3s;

      border: 1px solid red;
      border-radius: 64px;
      color: white;
      position: relative;
      padding: 1px 9px;
      font-family: 'Poppins';
      font-size: 1px;
      left: -17px;
      background: red;
    }
  }

  button {
    margin: 0 8px;
    background-color: transparent;
    border: 2px solid white;
    transition-duration: 0.3s;
    a {
      font-family: 'headline-gothic-atf';
      color: white;
      font-size: 20px;
    }
    /* padding: 12px; */
    height: 50px;
    padding: 0;
  }
  #reg {
    &:hover {
      border: 2px solid #187fe7;
      box-shadow: 0px 2px 10px 5px #187fe7;

      a {
        color: #187fe7;
      }
    }
  }

  #log {
    width: 100px;
    background-color: white;
    a {
      color: black;
    }
    &:hover {
      box-shadow: 0px 2px 10px 5px #187fe7;
      border: black;
      background-color: black;
      a {
        color: white;
      }
    }
  }
  @media screen and (max-width: 906px) {
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    h3 {
      font-size: 42px;
    }

    div {
      justify-content: space-between;
      display: flex;
      flex-direction: column;
    }

    #list {
      a {
        padding: 4px 0;
      }
    }

    #icons {
      flex-direction: row;
      font-size: 24px;
    }

    #buttons {
      button {
        margin: 8px 0;
      }
    }
  }
`;
