import { Box, Flex, Heading } from "@chakra-ui/react";

export function Separator() {
  return (
    <Flex direction="column">
      <Box
        w={["60px","90px"]}
        h="2px"
        mx="auto"
        bg="gray.100"
        my={["9","20"]}
      />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5","14"]}
        fontSize={["lg","3xl","4xl"]}
      >
        Vamos nessa?<br/> Então escolha seu continente
      </Heading>
    </Flex>
  );
}
