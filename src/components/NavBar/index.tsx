/* eslint-disable react/function-component-definition */
import React from 'react';
import { Link } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import { FiShoppingBag } from 'react-icons/fi';
import { stack as Menu } from 'react-burger-menu';
import { Burgue, Container, Line } from './styles';

const Content: React.FC = () => (
  <Container>
    <Link to="/">
      <h3>Kron</h3>
    </Link>
    <div id="list">
      <Link to="/">Aulas </Link>
      <Link to="/">avaliações</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/">cronograma</Link>
      <Link to="/">blog </Link>
      <Link to="/">contato</Link>
      <Link to="/">outro</Link>
    </div>
    <div id="icons">
      <BsPerson id="icon-p" />
      <FiShoppingBag id="icon-b" />
    </div>
    <div id="buttons">
      <button type="button" id="reg">
        <Link to="/">se torne membro</Link>
      </button>
      <button type="button" id="log">
        <Link to="/login">Logar</Link>
      </button>
    </div>
  </Container>
);

const NavBar: React.FC = () => (
  <>
    <Line>
      <Content />
    </Line>
    <Burgue>
      <Menu>
        <Content />
      </Menu>
    </Burgue>
  </>
);

export default NavBar;
