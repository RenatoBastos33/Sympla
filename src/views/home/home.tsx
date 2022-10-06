// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Category} from '@app/types/categoryType';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Event} from '@app/types/eventTypes';
import Background from '@atoms/containers/background';
import CategoryList from '@organisms/categoryList';
import EventList from '@organisms/eventList';
import Section from '@organisms/section';
import React, {useEffect, useState} from 'react';

// import { Container } from './styles';

const HomeScreen: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    var categoriesData = require('../../../server/categories.json');
    var eventsData = require('../../../server/events.json');
    setCategories(categoriesData);
    setEvents(eventsData);
  }, []);

  return (
    <Background>
      <Section buttonText="Ver tudo" title="Olá. Vem viver com a gente">
        <CategoryList data={categories} />
      </Section>
      <Section title="Recomendações pra você">
        <EventList data={events} />
      </Section>
      <Section title="Em destaque na Sympla"></Section>
    </Background>
  );
};

export default HomeScreen;
