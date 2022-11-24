import React from 'react';
import NavBar from '../../components/NavBar';
import cover from '../../assets/cover2.png';

import { Container, Head } from './styles';

const shop: React.FC = () => (
  <Container>
    <Head>
      <img src={cover} alt="" />

      <NavBar />
      <div id="title">
        <div id="sub-title">
          <p>shop</p>
          <h3>our shop</h3>
        </div>
        <div id="path">
          <p>Home</p>
          <p>/</p>
          <span>Shop</span>
        </div>
        <div id="line" />
      </div>
    </Head>
  </Container>
);

export default shop;
