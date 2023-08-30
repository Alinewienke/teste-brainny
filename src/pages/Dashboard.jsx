import { Box, Flex } from '@chakra-ui/react';

import Sidebar from '../components/Sidebar/Sidebar';
import WorkerCard from '../components/WorkerCard/WorkerCard';
import WorkerHeader from '../components/WorkerHeader/WorkerHeader';

function Dashboard() {
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

export default Dashboard;
