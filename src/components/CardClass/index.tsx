import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface IPros {
  img: string;
  title: string;
  description: string;
}
const CardClass: React.FC<IPros> = ({ img, title, description }: IPros) => (
  <Container>
    <img alt="" src={img} />
    <h2>{title}</h2>
    <p>{description}</p>
    <Link to="/">Saiba Mais</Link>
  </Container>
);

export default CardClass;
