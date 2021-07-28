import { Flex, Icon, Text, useBreakpointValue } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image"

interface IconsProps {
  icon: string;
  text: string;
}

export function Icons({ icon, text } : IconsProps ) {
  const IsWide = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <Flex
      direction={["row", "column"]}
      align="center"
      justify="center"
    >
      { IsWide ?
        <Image
          src={`/icons/${icon}.svg`}
          w="85px"
          h="85px"
          mb="6"
        />

        : <Text
          color="yellow.400"
          fontSize="4xl"
          mr="2"
        >
          .
        </Text>
      }

      <Text
        fontWeight="600"
        align="center"
        color="gray.100"
        fontSize={["md","xl","2xl"]}
      >{text}</Text>
    </Flex>
  );
}
