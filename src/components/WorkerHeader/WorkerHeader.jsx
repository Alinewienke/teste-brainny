import { Text, Grid, GridItem } from '@chakra-ui/react';

function WorkerHeader() {
  return (
    <>
      <Grid
        templateColumns='repeat(8, 1fr)'
        gap={4}
        px='4'
        mb='4'
      >
        <GridItem colSpan={2}>
          <Text
            fontWeight='600'
            fontSize='22px'
          >
            Colaborador
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text
            fontWeight='600'
            fontSize='22px'
          >
            Data
          </Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Text
            fontWeight='600'
            fontSize='22px'
          >
            Hora
          </Text>
        </GridItem>
      </Grid>
    </>
  );
}

export default WorkerHeader;
