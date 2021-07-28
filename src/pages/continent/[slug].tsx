import { Flex } from "@chakra-ui/react";
import React from "react";
import Cities from "../../components/Cities";


import ContinentBanner from "../../components/ContinentBanner";
import { Header } from "../../components/Header";
import Matter from "../../components/Matter";

export default function Continent() {
  return(
    <Flex direction="column">

      <Header />
      <ContinentBanner />

      <Flex
        direction="column"
        maxW="1160px"
        mx="auto"
        mb="10"
        px="4"
      >

        <Matter />

        <Cities />

      </Flex>

    </Flex>
  );
}
