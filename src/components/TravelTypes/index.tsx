import { Grid, GridItem } from "@chakra-ui/react";
import { Icons } from "./Icons";

export function TravelTypes() {
  return (
    <Grid
      templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr","repeat(5, 1fr)"]}
      w="100%"
      alignItems="center"
      justify="space-between"
      mt={["10","32"]}
      mx="auto"
      maxW="1160px"
      gap={["1","5"]}
    >
      <GridItem>
        <Icons icon="cocktail" text="vida noturna" />
      </GridItem>

      <GridItem>
        <Icons icon="surf" text="praia" />
      </GridItem>

      <GridItem>
        <Icons icon="building" text="moderno" />
      </GridItem>

      <GridItem>
        <Icons icon="museum" text="clássico" />
      </GridItem>

      <GridItem colSpan={[2,2,2,2,1]}>
        <Icons icon="earth" text="e mais ..." />
      </GridItem>

    </Grid>
  );
}
