/* eslint-disable jsx-a11y/alt-text */
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function City() {
 return (
  <Box borderRadius="4px" overflow="hidden">

    <Image
      src="/London.png"
      h="170px" w="100%"
      objectFit="cover"
      border="1px"
      borderColor="yellow.300"
    />

    <Flex
      p="6"
      align="center"
      justify="space-between"
      bg="gray.700"
      border="1px"
      borderColor="yellow.300"
      borderTop="0"
    >
      <Flex direction="column">

        <Heading fontSize="xl" fontWeight="500" color="gray.50">Londres</Heading>

        <Text mt="3" fontSize="md" color="gray.100" fontWeight="500">Reino Unido</Text>

      </Flex>

      <Image src="/banLondon.png" w="30px" h="30px" borderRadius="50%" objectFit="cover"/>

    </Flex>
  </Box>
 )
}
