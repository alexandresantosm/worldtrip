import { Flex, Grid, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as="header"
      bg="white"
      w="100%"
      mx="auto"
      px="1rem"
      h={["50px", "100px"]}
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxWidth="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        <Image
          src="/logo.svg"
          alt="Avião voando sobre o nome da marca World Trip."
          justifySelf="center"
          gridColumn="2"
          w={["81px", "100px"]}
        />
      </Grid>
    </Flex>
  );
}