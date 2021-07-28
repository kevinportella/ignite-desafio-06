import { Flex, Heading, Link as ChakraLink, Text} from '@chakra-ui/react';

interface SlideItemProps {
  image: string,
  continent: string,
  text: string,
  href: string,
}

export function SlideItem({image, continent, text, href} : SlideItemProps) {
  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
      direction="column"
      bgImage={image}
      bgRepeat="no-repeat"
      bgSize="cover"
      textAlign="center"
      bgPosition="center"
    >
      <ChakraLink href={href}>
        <a>
          <Heading
            fontSize={["3xl","4xl","5xl"]}
            color="gray.100"
            fontWeight="bold"
          >
            {continent}
          </Heading>
          <Text
            fontSize={["lg","xl","2xl"]}
            color="gray.300"
            fontWeight="bold"
            mt={["2","4"]}
          >{text}</Text>
        </a>
      </ChakraLink>
    </Flex>
  );
}
