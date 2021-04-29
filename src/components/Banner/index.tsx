import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "368px"]}
      bgImage="url('/images/banner-image.jpg')"
      bgPosition={["100% 10%", "100% 10%", "100% 20%", "100% 20%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <Box>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}
          >
            5 Continentes,<br />
            infinitas possibilidades.
          </Heading>
          <Text
            color="gray.300"
            fontWeight="400"
            fontSize={["0.8rem", 'xl']}
            mt="5"
            maxWidth={["100%", "100%", "100%", "550px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image
          src="/images/airplane.svg"
          w={["300px", "300px", "300px", "430px"]}
          display={["none", "none", "block"]}
          alt="Avião amarelo voando com algumas nuvens ao redor."
          transform={["translateY(2rem)", "translateY(2rem)", "translateY(2.5rem)", "translateY(4rem)"]}
          ml="8"
        />
      </Flex>
    </Flex>
  );
}