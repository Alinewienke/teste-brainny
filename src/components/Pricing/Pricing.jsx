import { Flex, Image, Text, Heading, Center, Card, CardBody, CardFooter, Button, Stack } from '@chakra-ui/react';

import { pricingInformation } from '../../mocks/pricingInformation';
import check from '../../assets/check.png';
import close from '../../assets/close-transparent.png';

function Pricing() {
  return (
    <>
      <Center>
        <Heading
          as='h3'
          fontSize='40'
          color='white'
          mt='30'
          mb='2'
          fontWeight='800'
          textAlign='center'
        >
          Encontre o plano perfeito
        </Heading>
      </Center>
      <Center mb='20'>
        <Text
          fontSize='20'
          maxWidth='650'
          color='white'
          textAlign='center'
          opacity='70%'
        >
          Escolha o plano que melhor se encaixa na sua empresa e faça sua assinatura, dentro de 72h iremos liberar seus
          acessos.
        </Text>
      </Center>
      <Flex
        justify='center'
        gap='6'
      >
        {pricingInformation.map(e => (
          <Card
            maxWidth='333px'
            minWidth='280px'
            key={e.name}
            align='center'
            variant='outline'
            maxW='sm'
            backgroundColor='#330693'
            color='white'
          >
            <CardBody>
              <Stack
                mt='6'
                spacing='3'
                textAlign='center'
              >
                <Heading
                  textAlign='center'
                  fontWeight='400'
                  fontSize='20px'
                >
                  {e.name}
                </Heading>
                <Heading
                  fontWeight='800'
                  fontSize='50px'
                >
                  {e.price}
                </Heading>
                <Text color='secondary'>{e.workers}</Text>
                {e.options.map(option => (
                  <Flex
                    align='center'
                    key={option.title}
                  >
                    <Image
                      w='18'
                      h='18'
                      src={option.available ? check : close}
                      alt='close-principal'
                      mr='2'
                    />
                    <Text color={option.available ? 'white' : 'gray.500'}>{option.title}</Text>
                  </Flex>
                ))}
              </Stack>
            </CardBody>
            <CardFooter>
              <Button
                variant='solid'
                bg='secondary'
                color='white'
              >
                Assinar agora
              </Button>
            </CardFooter>
          </Card>
        ))}
      </Flex>
    </>
  );
}

export default Pricing;
