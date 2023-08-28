import { Button } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

import closePrincipal from '../../assets/close-principal.png';

import { Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

function MainContent() {
  return (
    <>
      <Image
        src={closePrincipal}
        alt='close-principal'
      />
      <Text fontSize='3xl'>Esquece o ponto manual</Text>
      <Heading
        as='h3'
        size='lg'
      >
        Chegou a nova realidade para Controle de Pontos
      </Heading>
      <Text fontSize='md'>
        Com o PontoGo seus colaboradores poderão bater seus pontos de forma fácil e rápida, possuindo também uma
        Dashboard intuitiva.
      </Text>
      <Button colorScheme='blue'>Button</Button>
      <Button
        colorScheme='teal'
        variant='outline'
      >
        Button
      </Button>
    </>
  );
}

export default MainContent;