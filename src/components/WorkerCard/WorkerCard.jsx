import { Card, Text, Box, Grid, GridItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function WorkerCard({ workerName, workerNumber, date }) {
  const ajustDate = date => {
    const newDate = new Date(date);
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const ajustHour = date => {
    const newDate = new Date(date);
    return newDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <Card
        w='100%'
        h='73'
        direction={{ base: 'row' }}
        align='center'
        p='4'
        mb='4'
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
                w='300px'
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
              {ajustDate(date)}
            </Text>
          </GridItem>
          <GridItem colSpan={1}>
            <Text
              fontSize='22px'
              color='#20292E'
            >
              {ajustHour(date)}
            </Text>
          </GridItem>
        </Grid>
      </Card>
    </>
  );
}

WorkerCard.propTypes = {
  workerName: PropTypes.string,
  workerNumber: PropTypes.string,
  date: PropTypes.string
};

export default WorkerCard;
