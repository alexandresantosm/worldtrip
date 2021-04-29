import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <Flex
      direction="column"
    >
      <Header />
    </Flex>
  );
}
