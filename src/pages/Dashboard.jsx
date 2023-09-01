import { Box, Flex } from '@chakra-ui/react';

import { gql, useQuery } from '@apollo/client';

import Sidebar from '../components/Sidebar/Sidebar';
import WorkerCard from '../components/WorkerCard/WorkerCard';
import WorkerHeader from '../components/WorkerHeader/WorkerHeader';

function Dashboard() {
  const REGISTERED_TIMES_QUERY = gql`
    query RegisteredTimesQuery {
      registeredTimes {
        id
        created_at
        timeRegistered
        user {
          id
          name
        }
      }
    }
  `;

  const { loading, data } = useQuery(REGISTERED_TIMES_QUERY);

  return (
    <>
      <Box
        width='100%'
        height='100vh'
        bg='#F2F2F2'
      >
        <Flex>
          <Sidebar pageName='Dashboard' />
          <Box
            width='100%'
            p='6'
          >
            <WorkerHeader />
            {!loading &&
              data &&
              data.registeredTimes &&
              data.registeredTimes.map(e => (
                <WorkerCard
                  key={e.id}
                  workerName={e.user ? e.user.name : 'Nome não informado'}
                  workerNumber={e.user ? e.user.id : ''}
                  date={e.timeRegistered}
                />
              ))}
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Dashboard;
