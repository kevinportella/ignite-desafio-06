import React from "react";

import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { RiArrowLeftSLine } from 'react-icons/ri'

import Link from 'next/link'

export function Header() {
  const { asPath } = useRouter();

  const notHome = asPath !== '/'

  return (
    <Flex
      as="header"
      bg="gray.900"
      h={["50px","100px"]}
      w="100%"
      mx="auto"
      px="4"
      align="center"
      justify="center"
    >

      <Grid
        templateColumns="repeat(3, 1fr)"
        h="100%"
        w="100%"
        mx="auto"
        maxW="1160px"
        alignItems="center"
        justifyContent="center"
      >

        { notHome && (
          <Link href="/">
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={["20", "40"]} justifySelf="start"/>
            </a>
          </Link>
        )}

        <Image
          w={["81px","184px"]}
          src="/logo.svg"
          alt="Worldtrip"
          justifySelf="center"
          gridColumn="2"

        />
      </Grid>
    </Flex>
  );
}
