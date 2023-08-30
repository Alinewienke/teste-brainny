import { Card, Text, Box, Grid, GridItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function WorkerCard({ workerName, workerNumber, date, hour }) {
  return (
    <>
      <Card
        w='100%'
        h='73'
        direction={{ base: 'row' }}
        align='center'
        p='4'
      >
        <Grid
          templateColumns='repeat(10, 1fr)'
          gap={4}
        >
          <GridItem colSpan={4}>
            <Box>
              <Text
                fontWeight='700'
                fontSize='22px'
              >
                {workerName}
              </Text>
              <Text>{workerNumber}</Text>
            </Box>
          </GridItem>
          <GridItem colSpan={4}>
            <Text
              fontSize='22px'
              color='#20292E'
            >
              {date}
            </Text>
          </GridItem>
          <GridItem colSpan={1}>
            <Text
              fontSize='22px'
              color='#20292E'
            >
              {hour}
            </Text>
          </GridItem>
        </Grid>
      </Card>
    </>
  );
}

WorkerCard.propTypes = {
  workerName: PropTypes.string,
  workerNumber: PropTypes.number,
  date: PropTypes.string,
  hour: PropTypes.number
};

export default WorkerCard;
