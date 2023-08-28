import { Button } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

import closePrincipal from '../../assets/close-principal.png';

import { Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

import { Flex, Spacer, Box, Center } from '@chakra-ui/react';

function MainContent() {
  return (
    <>
      <Center>
        <Flex
          minWidth='max-content'
          alignItems='center'
          gap='2'
        >
          <Box maxWidth='430'>
            <Text
              color='white'
              fontSize='3xl'
              mb='4'
            >
              Esquece o ponto manual
            </Text>
            <Heading
              as='h3'
              size='lg'
              color='white'
              mb='4'
            >
              Chegou a nova realidade para Controle de Pontos
            </Heading>
            <Text
              color='white'
              fontSize='md'
              mb='4'
            >
              Com o PontoGo seus colaboradores poderão bater seus pontos de forma fácil e rápida, possuindo também uma
              Dashboard intuitiva.
            </Text>
            <Button
              bg='secondary'
              color='white'
              mr='4'
            >
              Assinar agora
            </Button>
            <Button
              variant='outline'
              color='white'
            >
              Ver planos
            </Button>
          </Box>
          <Image
            src={closePrincipal}
            alt='close-principal'
          />
        </Flex>
      </Center>
    </>
  );
}

export default MainContent;
