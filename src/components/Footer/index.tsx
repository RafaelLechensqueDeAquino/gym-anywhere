import React from 'react';
import { BsHeart, BsTelephone } from 'react-icons/bs';
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FiInstagram, FiTwitter } from 'react-icons/fi';
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi';
import { RiCopyrightLine, RiGoogleLine } from 'react-icons/ri';
import { TbBrandTelegram } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Giga from '../../assets/giga.jpeg';
import { Container } from './styles';

const Footer: React.FC = () => (
  <Container>
    <div id="main">
      <div className="column">
        <h3>kron</h3>
        <span>
          <BsTelephone />
          (201) 555-0124
        </span>
        <span>
          <HiOutlineMail />
          kroncompany@gmail.com
        </span>
        <span>
          <HiOutlineLocationMarker />
          Santa helena - PR ,Av. Brasil, 1425
        </span>
        <div id="networks">
          <CiFacebook />
          <RiGoogleLine />
          <FiInstagram />
          <FiTwitter />
          <CiLinkedin />
        </div>
      </div>
      <div className="column">
        <h3>Company</h3>
        <Link to="/">Sobre nós</Link>
        <Link to="/">Serviços</Link>
        <Link to="/">Estudos de caso</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Contatos</Link>
      </div>
      <div className="column">
        <h3>Ajuda</h3>
        <Link to="/">FAQ</Link>
        <Link to="/">Politica de privacidade</Link>
        <Link to="/">Suporte</Link>
        <Link to="/">Termos & Condições</Link>
        <Link to="/">Carreiras</Link>
      </div>
      <div className="column">
        <h3>Noticias</h3>
        <Link to="/" className="card-link">
          <img src={Giga} alt="" srcSet="" />
          <div>
            <h3>Dicas para ficar giga</h3>
            <p>23 nov, 2022</p>
          </div>
        </Link>
        <Link to="/" className="card-link">
          <img src={Giga} alt="" srcSet="" />
          <div>
            <h3>Dicas para ficar giga</h3>
            <p>23 nov, 2022</p>
          </div>
        </Link>
        <Link to="/" className="card-link">
          <img src={Giga} alt="" srcSet="" />
          <div>
            <h3>Dicas para ficar giga</h3>
            <p>23 nov, 2022</p>
          </div>
        </Link>
      </div>
      <div className="column">
        <h3>Inscreva-se</h3>
        <form>
          <input type="text" placeholder="Endereço de email" />
          <button type="button">Enviar</button>
          <p>Fique por dentro do que a de novo</p>
        </form>
      </div>
    </div>
    <div id="line" />
    <div id="final">
      <p>
        <span>Feito com</span>
        <BsHeart />
        <span> pressa</span>
      </p>
      <p>
        <span>
          Copyright
          <RiCopyrightLine />
        </span>
      </p>
    </div>
  </Container>
);

export default Footer;
