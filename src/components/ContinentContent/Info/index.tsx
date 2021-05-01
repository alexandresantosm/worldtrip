import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';

export function Info() {
  return (
    <Flex
      as="section"
      align="center"
      justify="space-between"
    >
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          color="yellow.900"
          fontSize={["2xl", "5xl"]}
          fontWeight={[400, 600]}
        >
          50
        </Heading>
        <Text
          color="gray.700"
          fontSize={["md", "xl"]}
          fontWeight="600"
        >
          países
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          color="yellow.900"
          fontSize={["2xl", "5xl"]}
          fontWeight={[400, 600]}
        >
          60
        </Heading>
        <Text
          color="gray.700"
          fontSize={["md", "xl"]}
          fontWeight="600"
        >
          línguas
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          color="yellow.900"
          fontSize={["2xl", "5xl"]}
          fontWeight={[400, 600]}
        >
          27
        </Heading>
        <Text
          color="gray.700"
          fontSize={["md", "xl"]}
          fontWeight="600"
        >
          cidades +100
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon
                  as={RiInformationLine}
                  color="gray400"
                  cursor="pointer"
                  w={["0.625rem", "1rem"]}
                  h={["0.625rem", "1rem"]}
                  ml="1"
                />
              </span>
            </PopoverTrigger>
            <PopoverContent color="yellow.300" bg="gray.700">
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton />
              <PopoverBody
                as="p"
                fontWeight="400"
                fontSize='lg'
                textAlign="justify"
                mt="2"
              >
                Alemanha, Áustria, Bélgica, Croácia, Dinamarca, Espanha, França, Grécia, Hungria, Irlanda, Itália, Luxemburgo, Noruega, Polónia, Portugal, Rússia, Sérvia, Suécia, Suíça.
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>
    </Flex>
  );
}