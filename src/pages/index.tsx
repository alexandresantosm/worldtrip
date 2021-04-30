import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { ListTravelTypes } from '../components/ListTravelTypes';
import { Separator } from '../components/Separator';

export default function Home() {
  return (
    <Flex
      direction="column"
    >
      <Header />
      <Banner />
      <ListTravelTypes />
      <Separator />
      <Heading
        textAlign="center"
        fontWeight="500"
        fontSize={["lg", "3xl", "4xl"]}
        mb={["5", "14"]}
        lineHeight={["30px", "54px"]}
      >
        Vamos nessa?<br />
        Então escolha seu continente
      </Heading>
    </Flex>
  );
}
