import { Button } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

import logo from '../../assets/logo-white.png';

function NavBar() {
  return (
    <>
      <Image
        src={logo}
        alt='logo'
      />
      <Button
        colorScheme='teal'
        variant='link'
      >
        Button
      </Button>
      <Button
        colorScheme='teal'
        variant='link'
      >
        Button
      </Button>
      <Button colorScheme='blue'>Button</Button>
    </>
  );
}

export default NavBar;
