import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/theme';

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <h1>World Trip</h1>
    </ChakraProvider>
  );
}
