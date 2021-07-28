import { Flex, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import City from "./city";


export default function Cities() {
  return (
    <Flex
      direction="column"
      maxW="1160px"
      mx="auto"
    >
      <Heading
        fontWeight="500"
        fontSize={["2xl","4xl"]}
        mb="10"
      >
        Cidades +100
      </Heading>

      <Grid
        templateColumns={["1fr","1fr 1fr", "repeat(3, 1fr)", "repeat(5, 2fr)"]}
        gap={['20px','45px']}
        alignItems="center"
        justify="center"
        px={["30px", "0"]}
      >
        <City />
        <City />
        <City />
        <City />
        <City />

      </Grid>
    </Flex>
  )
 }
