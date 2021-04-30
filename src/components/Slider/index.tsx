import Link from 'next/link';
import { Flex, Heading, Text } from "@chakra-ui/layout";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export function Slider() {
  return (
    <Flex
      w="100%"
      maxWidth="1240px"
      h={["250px", "450px"]}
      mx="auto"
      mb={["5", "10"]}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        style={{ width: '100%', flex: '1' }}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('/images/north-america.jpg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="/">
              <a>
                <Heading
                  color="gray.100"
                  fontSize={["3xl", "4xl", "5xl"]}
                  fontWeight="bold"
                >
                  América do Norte
                </Heading>
                <Text
                  color="gray.300"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  fontWeight="bold"
                  mt={["2", "4"]}
                >
                  O sonho de consumo de grande parte da população.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('/images/south-america.jpg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="/">
              <a>
                <Heading
                  color="gray.100"
                  fontSize={["3xl", "4xl", "5xl"]}
                  fontWeight="bold"
                >
                  América do Sul
                </Heading>
                <Text
                  color="gray.300"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  fontWeight="bold"
                  mt={["2", "4"]}
                >
                  O continente com grande diversidade de clima e relevo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('/images/asia.jpg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="/">
              <a>
                <Heading
                  color="gray.100"
                  fontSize={["3xl", "4xl", "5xl"]}
                  fontWeight="bold"
                >
                  Ásia
                </Heading>
                <Text
                  color="gray.300"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  fontWeight="bold"
                  mt={["2", "4"]}
                >
                  O maior continente, tanto em área como em população.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('/images/africa.jpg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="/">
              <a>
                <Heading
                  color="gray.100"
                  fontSize={["3xl", "4xl", "5xl"]}
                  fontWeight="bold"
                >
                  África
                </Heading>
                <Text
                  color="gray.300"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  fontWeight="bold"
                  mt={["2", "4"]}
                >
                  O continente com maior diversidade cultural do planeta.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('/images/europe.svg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="/">
              <a>
                <Heading
                  color="gray.100"
                  fontSize={["3xl", "4xl", "5xl"]}
                  fontWeight="bold"
                >
                  Europa
                </Heading>
                <Text
                  color="gray.300"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  fontWeight="bold"
                  mt={["2", "4"]}
                >
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('/images/oceania.jpg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="/">
              <a>
                <Heading
                  color="gray.100"
                  fontSize={["3xl", "4xl", "5xl"]}
                  fontWeight="bold"
                >
                  Oceania
                </Heading>
                <Text
                  color="gray.300"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  fontWeight="bold"
                  mt={["2", "4"]}
                >
                  O continente formado por um conjunto de ilhas.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}