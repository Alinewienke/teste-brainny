import { Text } from '@chakra-ui/react';
import { Heading, Center } from '@chakra-ui/react';

function Pricing() {
  return (
    <>
      <Center>
        <Heading
          as='h3'
          size='lg'
          color='white'
          margin='20px'
        >
          Encontre o plano perfeito
        </Heading>
      </Center>
      <Center>
        <Text
          fontSize='md'
          maxWidth='530'
          color='white'
        >
          Escolha o plano que melhor se encaixa na sua empresa e faça sua assinatura, dentro de 72h iremos liberar seus
          acessos.
        </Text>
      </Center>
    </>
  );
}

export default Pricing;
