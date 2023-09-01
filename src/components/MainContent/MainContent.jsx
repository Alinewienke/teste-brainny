import { Button, Flex, Box, Center, Image, Text, Heading } from '@chakra-ui/react';

import closePrincipal from '../../assets/close-principal.png';

function MainContent() {
  return (
    <>
      <Center>
        <Flex
          width='100%'
          alignItems='center'
        >
          <Box
            zIndex='5'
            minWidth='520'
          >
            <Text
              color='white'
              fontSize='24px'
              mb='3'
              fontWeight='300'
            >
              {'Esquece o ponto manual'.toUpperCase()}
            </Text>
            <Heading
              as='h3'
              fontSize='40px'
              color='white'
              mb='3'
              fontWeight='800'
              lineHeight='60px'
            >
              Chegou a nova realidade para{' '}
              <Heading
                as='span'
                color='secondary'
                fontSize='40px'
                fontWeight='800'
                lineHeight='60px'
              >
                Controle de Pontos
              </Heading>
            </Heading>
            <Text
              color='white'
              fontSize='18px'
              fontWeight='500'
              mb='7'
              lineHeight='27px'
            >
              Com o PontoGo seus colaboradores poderão bater <br />
              seus pontos de forma fácil e rápida, possuindo <br />
              também uma Dashboard intuitiva.
            </Text>
            <Button
              bg='secondary'
              color='white'
              mr='4'
              fontWeight='400'
              zIndex='5'
            >
              Assinar agora
            </Button>
            <Button
              variant='outline'
              color='white'
              px='8'
              fontWeight='400'
              zIndex='5'
            >
              Ver planos
            </Button>
          </Box>
          <Image
            src={closePrincipal}
            alt='close-principal'
            zIndex='5'
          />
        </Flex>
      </Center>
    </>
  );
}

export default MainContent;
