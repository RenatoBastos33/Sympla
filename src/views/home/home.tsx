import React from 'react';
import Background from '../../components/atoms/containers/background';
import SectionHeader from '../../components/molecules';

// import { Container } from './styles';

const HomeScreen: React.FC = () => {
  return (
    <Background>
      <SectionHeader buttonText="Ver tudo" title="Olá Vem viver com a gente" />
    </Background>
  );
};

export default HomeScreen;
