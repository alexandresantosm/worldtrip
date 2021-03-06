import { Grid, GridItem } from '@chakra-ui/react';
import { TravelType } from './TravelType';

export function ListTravelTypes() {
  return (
    <Grid
      templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxWidth="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <TravelType icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <TravelType icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <TravelType icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <TravelType icon="museum" text="clássico" />
      </GridItem>
      <GridItem
        colSpan={[2, 2, 2, 1]}
      >
        <TravelType icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}