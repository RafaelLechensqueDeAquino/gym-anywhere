/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import cover from '../../assets/cover2.png';
import product from '../../assets/product1.png';
import { useBag } from '../../hook/Bag';

import { Card, Container, Head } from './styles';

const myBag: React.FC = () => {
  const { bag, add, remove } = useBag();
  const [nesw, setNew] = useState(false);
  useEffect(() => {
    setNew(!nesw);
  }, [nesw]);
  return (
    <Container>
      <Head>
        <img src={cover} alt="" />

        <NavBar />
        <div id="title">
          <div id="sub-title">
            <p>Compras</p>
            <h3>lista de itens</h3>
          </div>
          <div id="path">
            <p>Home</p>
            <p>/</p>
            <span>Bag</span>
          </div>
          <div id="line" />
        </div>
      </Head>
      <div className="bg-white">
        {bag.map((b) => (
          <Card key={b.id}>
            <img src={b.img} alt="" />
            <div id="info">
              <h2>{b.name}</h2>
              <span>
                R$
                {b.price * (b.des ? b.des : 1)}
              </span>
              {/* <p>R${b.price}</p> */}
            </div>
            <div id="quant">
              <button
                type="button"
                id="left"
                onClick={() => {
                  remove(b.id);
                //   setNew(false);
                }}
              >
                -
              </button>
              <p>{b.quant}</p>
              <button type="button" id="right" onClick={() => add(b)}>
                +
              </button>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default myBag;
