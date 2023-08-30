import { Box, Button, Image, Divider } from '@chakra-ui/react';

import { LuLayoutDashboard } from 'react-icons/lu';
import { AiOutlineLogout } from 'react-icons/ai';

import logo from '../../assets/logo-purple.png';

function Sidebar() {
  return (
    <>
      <Box
        width='12%'
        height='100vh'
        bg='white'
        px='6'
        py='8'
      >
        <Image
          src={logo}
          alt='logo'
          mb='6'
          w='134px'
        />
        {/* <Divider orientation='vertical' /> */}
        <Button
          leftIcon={<LuLayoutDashboard />}
          color='principal'
          variant='link'
          fontSize='14px'
          fontWeight='400'
          mt='10'
        >
          Dashboard
        </Button>
        <Button
          leftIcon={<AiOutlineLogout />}
          color='black'
          variant='link'
          fontSize='14px'
          fontWeight='400'
          position='absolute'
          bottom='8'
          left='6'
        >
          Sair
        </Button>
      </Box>
    </>
  );
}

export default Sidebar;
