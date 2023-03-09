// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Category} from '@app/types/categoryType';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {City} from '@app/types/cityType';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Event} from '@app/types/eventTypes';
import ScrollBackground from '@atoms/containers/scrollBackground';
import InputText from '@molecules/inputText';
import CategoryList from '@organisms/categoryList';
import CityList from '@organisms/cityList';
import EventList from '@organisms/eventList';
import FeatureEventList from '@organisms/featureEventList';
import Section from '@organisms/section';
import React, {useEffect, useState} from 'react';
import styles from './styles';

// import { Container } from './styles';

const HomeScreen: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    var categoriesData = require('../../../server/categories.json');
    var eventsData = require('../../../server/events.json');
    var citiesData = require('../../../server/cities.json');
    setCategories(categoriesData);
    setEvents(eventsData);
    setCities(citiesData);
  }, []);

  return (
    <ScrollBackground keyboardShouldPersistTaps="handled">
      <InputText placeholder="Eventos e Locais" />
      <Section buttonText="Ver tudo" title="Olá. Vem viver com a gente">
        <CategoryList data={categories} />
      </Section>
      <Section
        title="Recomendações pra você"
        style={styles.recomendationsContainer}>
        <EventList data={events} />
      </Section>
      <Section title="Em destaque na Sympla">
        <FeatureEventList data={events} />
      </Section>
      <Section title="Visto recentemente por você">
        <EventList data={events} />
      </Section>
      <Section title="Festas e shows" buttonText="Ver tudo">
        <EventList data={events} />
      </Section>
      <Section title="O melhor da cidade" buttonText="Ver tudo">
        <CityList data={cities} />
      </Section>
    </ScrollBackground>
  );
};

export default HomeScreen;
