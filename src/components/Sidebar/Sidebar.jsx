import { Box, Button, Image, Divider } from '@chakra-ui/react';

import { LuLayoutDashboard } from 'react-icons/lu';
import { AiOutlineLogout } from 'react-icons/ai';
import { PiNotepad } from 'react-icons/pi';

import PropTypes from 'prop-types';

import logo from '../../assets/logo-purple.png';

function Sidebar({ pageName }) {
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
          leftIcon={pageName === 'Dashboard' ? <LuLayoutDashboard /> : <PiNotepad />}
          color='principal'
          variant='link'
          fontSize='14px'
          fontWeight='400'
          mt='10'
        >
          {pageName === 'Dashboard' ? 'Dashboard' : 'Meus registros'}
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

Sidebar.propTypes = {
  pageName: PropTypes.string
};

export default Sidebar;
