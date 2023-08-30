import { Box, Flex } from '@chakra-ui/react';

import Sidebar from '../components/Sidebar/Sidebar';
import WorkerCard from '../components/WorkerCard/WorkerCard';
import WorkerHeader from '../components/WorkerHeader/WorkerHeader';
import RegistrationModal from '../components/RegistrationModal/RegistrationModal';

function MyRegistries() {
  return (
    <>
      <Box
        width='100%'
        height='100vh'
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
            <WorkerCard
              workerName='João Silva'
              workerNumber='001'
              date='12/10/19'
              hour='18:30h'
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default MyRegistries;
