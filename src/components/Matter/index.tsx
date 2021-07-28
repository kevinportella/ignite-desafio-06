import { Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { RiInformationLine } from "react-icons/ri";
import Cities from "../Cities";
import Informations from "./Informations";

export default function Matter() {
  return (
    <Grid
      templateColumns={["1fr","1fr","1fr 1fr","1.2fr 1fr"]}
      gap={[5,10,16,20]}
      my={["8","20"]}
    >

      <Text
        fontSize={["lg","xl","2xl"]}
        color="gray.50"
        textAlign="justify"
      >
       A Europa é, por convenção, um dos seis continentes do mundo.
       Compreendendo a península ocidental da Eurásia,
       a Europa geralmente divide-se da Ásia a leste pela divisória
       de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso,
       e o mar Negro a sudeste.

      </Text>

      <Informations />


    </Grid>
  );
}
