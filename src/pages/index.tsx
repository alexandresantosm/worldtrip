import { Flex } from '@chakra-ui/react';
import React from 'react';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { ListTravelTypes } from '../components/ListTravelTypes';

export default function Home() {
  return (
    <Flex
      direction="column"
    >
      <Header />
      <Banner />
      <ListTravelTypes />
    </Flex>
  );
}
