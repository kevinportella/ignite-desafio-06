import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text, Tooltip } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";


export default function Informations() {
  return (
    <Flex alignItems="center" justifyContent="space-between">
    <Flex direction="column" justify="center" align={["flex-start","flex-start", "center"]}>
        <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">
          50
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.50">
          países
        </Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start","flex-start", "center"]}>
        <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">
          60
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.50">
          línguas
        </Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start","flex-start", "center"]}>
        <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">
          27
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.50">
          cidades +100

          <Popover>
            <PopoverTrigger>
              <span>
                <Icon cursor="pointer" as={RiInformationLine} ml="1" color="gray.400" w={["10px","16px"]} h={["10px","16px"]}/>
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.50" color="yellow.400">
              <PopoverArrow bg="gray.50"/>
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg">Paris, Chile, Brasil, Portugal</PopoverBody>
            </PopoverContent>
          </Popover>

        </Text>
      </Flex>

    </Flex>
  )
}
