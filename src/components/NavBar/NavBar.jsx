import { Button, ButtonGroup } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Flex, Spacer, Box } from '@chakra-ui/react';

import logo from '../../assets/logo-white.png';

function NavBar() {
  return (
    <>
      <Flex
        color='white'
        alignItems='center'
      >
        <Box p='2'>
          <Image
            w='164px'
            src={logo}
            alt='logo'
          />
        </Box>
        <Spacer />
        <ButtonGroup gap='10'>
          <Button
            colorScheme='teal'
            variant='link'
            color='white'
          >
            Início
          </Button>
          <Button
            colorScheme='teal'
            variant='link'
            color='white'
          >
            Planos
          </Button>
          <Button
            color='principal'
            bg='white'
          >
            Fazer login
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  );
}

export default NavBar;
