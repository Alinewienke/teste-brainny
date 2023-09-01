import { Box, Flex } from '@chakra-ui/react';

import { gql, useQuery } from '@apollo/client';

import Sidebar from '../components/Sidebar/Sidebar';
import WorkerCard from '../components/WorkerCard/WorkerCard';
import WorkerHeader from '../components/WorkerHeader/WorkerHeader';
import RegistrationModal from '../components/RegistrationModal/RegistrationModal';

function MyRegistries() {
  const userId = localStorage.getItem('userId');

  const REGISTERED_TIMES_QUERY = gql`
    query RegisteredTimesQuery($id: String!) {
      registeredTimes(sort: "created_at:desc", where: { user: { id: $id } }) {
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

  const { loading, data } = useQuery(REGISTERED_TIMES_QUERY, {
    variables: {
      id: userId
    }
  });

  return (
    <>
      <Box
        width='100%'
        height='100%'
        bg='#F2F2F2'
      >
        <Flex>
          <Sidebar pageName='My Registries' />
          <Box
            width='100%'
            px='6'
            py='10'
          >
            <RegistrationModal />
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

export default MyRegistries;
