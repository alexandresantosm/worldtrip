import { Flex, Heading } from '@chakra-ui/react';

export function ContinentBanner() {
  return (
    <Flex
      w="100%"
      h={["150", "300", "500"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      bgImage="url('/images/banner-eu.svg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={["center", "center", "flex-start"]}
    >
      <Heading
        color="gray.100"
        textAlign={["center", "left"]}
        fontSize={["1.75rem", "5xl"]}
        fontWeight="600"
        lineHeight={["2.625rem", "4.5rem"]}
      >
        Europa
      </Heading>
      </Flex>
  );
}