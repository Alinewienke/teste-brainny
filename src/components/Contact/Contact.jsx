import { Center, Flex, Image, Box, Spacer } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

import logoPontoGo from '../../assets/logo-pontogo.png';

import logoInstagram from '../../assets/logo-instagram.png';
import logoFacebook from '../../assets/logo-facebook.png';
import logoLinkedin from '../../assets/logo-linkedin.png';

function Contact() {
  return (
    <>
      <Center>
        <Flex
          mt='10'
          alignItems='center'
          w='450px'
        >
          <Box>
            <Image
              src={logoPontoGo}
              alt='logo pontogo'
            />
            <Text
              color='white'
              fontSize='xs'
            >
              Se conecta com a gente
            </Text>
          </Box>
          <Spacer />
          <Image
            src={logoInstagram}
            alt='logo instagram'
          />
          <Spacer />
          <Image
            src={logoFacebook}
            alt='logo facebook'
          />
          <Spacer />
          <Image
            src={logoLinkedin}
            alt='logo linkedin'
          />
        </Flex>
      </Center>
    </>
  );
}

export default Contact;
