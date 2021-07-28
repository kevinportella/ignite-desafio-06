import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

export default function ContinentBanner() {
  return(
    <Flex
      w="100%"
      h={["150px","300px","500px"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      bgImage="url(/city.svg)"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={["center", "center","flex-start"]}
    >

      <Heading
        textAlign={["center", "left"]}
        fontSize={["7", "5xl"]}
        color="gray.100"
        fontWeight="500"
      >
        Europa
      </Heading>

    </Flex>
  );
}
