/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
/* eslint-disable object-curly-newline */
import React, { useCallback } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useBag } from '../../hook/Bag';
import NavBar from '../../components/NavBar';
import cover from '../../assets/cover2.png';
import Product1 from '../../assets/product1.png';

import { Container, Head, Seach, ListProducts } from './styles';

interface IItens {
  id: number;
  name: string;
  img: string;
  price: number;
  des: number | undefined;
  quant: number;
}
const shop: React.FC = () => {
  const { add } = useBag();
  const handle = useCallback((itens:IItens) => {
    add(itens);
  }, [add]);
  const products = [
    {
      id: 0,
      name: 'Suquinho para creser',
      price: 30,

      img: Product1,
    },
    {
      id: 1,
      name: 'Suquinho para creser',
      price: 30,
      des: 0.66,
      img: Product1,
    },
    {
      id: 2,
      name: 'Suquinho para creser',
      price: 30,

      img: Product1,
    },
    {
      id: 3,
      name: 'Suquinho para creser',
      price: 30,
      des: 0.66,
      img: Product1,
    },
  ];
  return (
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
      <div className="bg-white">
        <Seach>
          <div>
            <h2>Todos Produtos</h2>
            <h2>Equipamentos</h2>
            <h2>Suplementos</h2>
          </div>
          <div id="input">
            <input type="text" placeholder="Pesquisar..." />
            <CiSearch />
          </div>
        </Seach>
        <ListProducts>
          {products.map((itens) => (itens.des ? (
            <div key={itens.id}>
              <img src={itens.img} alt="" />
              <h3>{itens.name}</h3>
              <div className="price">
                <span>
                  R$
                  {itens.price * itens.des}
                </span>
                <p>
                  R$
                  {itens.price}
                </p>
              </div>
              <button type="button" onClick={() => add({ id: itens.id, des: itens.des, img: itens.img, name: itens.name, price: itens.price, quant: 1 })}>+ Adicionar +</button>
            </div>
          ) : (
            <div>
              <img src={itens.img} alt="" />
              <h3>{itens.name}</h3>
              <div className="price">
                <span>
                  R$
                  {itens.price}
                </span>
              </div>
              <button type="button" onClick={() => add({ id: itens.id, des: undefined, img: itens.img, name: itens.name, price: itens.price, quant: 1 })}>+ Adicionar +</button>
            </div>
          )))}
        </ListProducts>
      </div>
    </Container>
  );
};

export default shop;
