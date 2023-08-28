import { Flex, Image, Spacer } from '@chakra-ui/react';

import logoBrainny from '../../assets/logo-brainny.svg';
import logoAmoPet from '../../assets/logo-amo-pet.png';
import logoBus from '../../assets/logo-bus.png';
import logoGostudy from '../../assets/logo-gostudy.png';

function CompanyLogos() {
  return (
    <>
      <Flex
        px='38'
        my='50'
      >
        <Image
          src={logoBrainny}
          alt='logo brainny'
          width='200px'
        />
        <Spacer />
        <Image
          src={logoAmoPet}
          alt='logo amo pet'
          width='213px'
        />
        <Spacer />
        <Image
          src={logoBus}
          alt='logo bus'
          width='165px'
        />
        <Spacer />
        <Image
          src={logoGostudy}
          alt='logo gostudy'
          width='283px'
        />
      </Flex>
    </>
  );
}

export default CompanyLogos;
