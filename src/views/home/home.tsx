// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Category} from '@app/types/categoryType';
import RoundIconButton from '@atoms/buttons/roundIconButton';
import Background from '@atoms/containers/background';
import CategoryList from '@organisms/categoryList';
import Section from '@organisms/section';
import React, {useEffect, useState} from 'react';

// import { Container } from './styles';

const HomeScreen: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>();

  useEffect(() => {
    var categoriesData = require('../../../server/categories.json');
    setCategories(categoriesData);
  }, []);

  return (
    <Background>
      <Section buttonText="Ver tudo" title="Olá. Vem viver com a gente">
        <CategoryList data={categories} />
      </Section>
      <Section title="Recomendações pra você">
        <RoundIconButton iconName="home" />
      </Section>
    </Background>
  );
};

export default HomeScreen;
