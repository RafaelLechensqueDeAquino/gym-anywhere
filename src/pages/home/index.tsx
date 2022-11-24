/* eslint-disable arrow-parens */
import React from 'react';
import { FiInstagram, FiTwitter } from 'react-icons/fi';
import { CiFacebook } from 'react-icons/ci';
import { RiClipboardLine, RiMedalLine } from 'react-icons/ri';
import {
  MdFitnessCenter,
  MdOutlineFitnessCenter,
  MdOutlineGroups,
} from 'react-icons/md';
import { TbBrandTelegram } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import cover from '../../assets/cover1.png';
import boss from '../../assets/boss.jpg';
import classA from '../../assets/classA.png';
import classB from '../../assets/classB.png';
import classC from '../../assets/classC.png';
import classR from '../../assets/classR.png';
import classY from '../../assets/classY.png';
import classD from '../../assets/classD.png';
import NavBar from '../../components/NavBar';
import CardClass from '../../components/CardClass';
// eslint-disable-next-line object-curly-newline
import { Container, Head, Info, Classes } from './styles';
import Footer from '../../components/Footer';

const home: React.FC = () => {
  // eslint-disable-next-line operator-linebreak
  const loremShort =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  const cadsList: {
    id: number;
    img: string;
    title: string;
    description: string;
  }[] = [
    {
      id: 0,
      img: classY,
      title: 'Yoga',
      description: loremShort,
    },
    {
      id: 1,
      img: classA,
      title: 'Alongamento',
      description: loremShort,
    },
    {
      id: 2,
      img: classC,
      title: 'Crossfit',
      description: loremShort,
    },
    {
      id: 3,
      img: classR,
      title: 'Cardio',
      description: loremShort,
    },
    {
      id: 4,
      img: classB,
      title: 'Boxing',
      description: loremShort,
    },
    {
      id: 5,
      img: classD,
      title: 'Fit dance',
      description: loremShort,
    },
  ];
  return (
    <Container>
      <Head>
        <img src={cover} alt="" />
        <NavBar />
        <div id="title">
          <h1>
            kron
            <br />
            Fitnes
          </h1>
          <button type="button">Aula gratis</button>
        </div>
      </Head>

      <Info>
        <div id="about">
          <img src={boss} alt="" />
          <div>
            <div>
              <h3>Sobre</h3>
              <h1>Brooklyn Simmons</h1>
              <span>Crossfit, Box</span>
            </div>
            <div id="list-icon">
              <FiTwitter />
              <TbBrandTelegram />
              <CiFacebook />
              <FiInstagram />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button type="button">
              <Link to="/">Saiba Mais</Link>
            </button>
          </div>
        </div>

        <div id="foot-info">
          <div className="ic">
            <RiMedalLine />
            <span>7 anos de experiencia</span>
          </div>
          <div className="ic">
            <MdOutlineFitnessCenter />
            <span>Resultados gratidos</span>
          </div>
          <div className="ic">
            <RiClipboardLine />
            <span>planejamento pessoal</span>
          </div>
          <div className="ic">
            <MdOutlineGroups />
            <span>aulas em grupos</span>
          </div>
        </div>
      </Info>
      <div className="bg-white">
        <Classes>
          <div id="head-class">
            <h2>Clases</h2>
            <button type="button">
              <Link to="/">+ Clases</Link>
            </button>
          </div>
          <div id="display-card">
            {cadsList.map(item => (
              <CardClass
                key={item.id}
                title={item.title}
                img={item.img}
                description={item.description}
              />
            ))}
          </div>
        </Classes>
      </div>
      <Footer />
    </Container>
  );
};

export default home;
