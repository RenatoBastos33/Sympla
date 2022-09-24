import React, {useEffect, useState} from 'react';
import Background from '../../components/atoms/containers/background';
import CategoryList from '../../components/organisms/categoryList';
import Section from '../../components/organisms/section';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Category} from '../../types/categoryType';

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
    </Background>
  );
};

export default HomeScreen;
