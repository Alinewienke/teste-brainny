import { Image } from '@chakra-ui/react';

import logoBrainny from '../../assets/logo-brainny.svg';
import logoAmoPet from '../../assets/logo-amo-pet.png';
import logoBus from '../../assets/logo-bus.png';
import logoGostudy from '../../assets/logo-gostudy.png';

function CompanyLogos() {
  return (
    <>
      <Image
        src={logoBrainny}
        alt='logo brainny'
      />
      <Image
        src={logoAmoPet}
        alt='logo amo pet'
      />
      <Image
        src={logoBus}
        alt='logo bus'
      />
      <Image
        src={logoGostudy}
        alt='logo gostudy'
      />
    </>
  );
}

export default CompanyLogos;
