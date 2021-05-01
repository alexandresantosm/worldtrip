import { useRouter } from 'next/router';
import Link from 'next/link';
import { RiArrowLeftSLine } from 'react-icons/ri';

import { Flex, Grid, Icon, Image } from '@chakra-ui/react';

export function Header() {
  const { asPath } = useRouter();
  const isNotHomePage = asPath !== "/"; 

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
        {isNotHomePage && (
          <Link href="/">
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[20, 40]}
                justifySelf="start"
              />
            </a>
          </Link>
        )}

        <Image
          src="/logo.svg"
          alt="Avião voando sobre o nome da marca World Trip."
          justifySelf="center"
          gridColumn="2"
          w={["81px", "184px"]}
        />
      </Grid>
    </Flex>
  );
}