import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

import logoPontoGo from '../../assets/logo-pontogo.png';

import logoInstagram from '../../assets/logo-instagram.png';
import logoFacebook from '../../assets/logo-facebook.png';
import logoLinkedin from '../../assets/logo-linkedin.png';

function Contact() {
  return (
    <>
      <Image
        src={logoPontoGo}
        alt='logo pontogo'
      />

      <Text fontSize='xs'>Se conecta com a gente</Text>

      <Image
        src={logoInstagram}
        alt='logo instagram'
      />
      <Image
        src={logoFacebook}
        alt='logo facebook'
      />
      <Image
        src={logoLinkedin}
        alt='logo linkedin'
      />
    </>
  );
}

export default Contact;
