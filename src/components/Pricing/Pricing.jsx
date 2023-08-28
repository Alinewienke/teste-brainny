import { Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

function Pricing() {
  return (
    <>
      <Heading
        as='h3'
        size='lg'
      >
        Encontre o plano perfeito
      </Heading>
      <Text fontSize='md'>
        Escolha o plano que melhor se encaixa na sua empresa e faça sua assinatura, dentro de 72h iremos liberar seus
        acessos.
      </Text>
    </>
  );
}

export default Pricing;
