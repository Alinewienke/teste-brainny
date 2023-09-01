import { Box, Divider, Image } from '@chakra-ui/react';

import NavBar from '../components/NavBar/NavBar';
import MainContent from '../components/MainContent/MainContent';
import CompanyLogos from '../components/CompanyLogos/CompanyLogos';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import Pricing from '../components/Pricing/Pricing';

import elipse1 from '../assets/login-elements/elipse1.png';
import elipse2 from '../assets/login-elements/elipse2.png';
import smoke1 from '../assets/login-elements/smoke1.png';
import smoke2 from '../assets/login-elements/smoke2.png';
import smoke3 from '../assets/login-elements/smoke3.png';
import star1 from '../assets/login-elements/star1.png';
import star2 from '../assets/login-elements/star2.png';
import star3 from '../assets/login-elements/star3.png';
import star5 from '../assets/login-elements/star5.png';
import star6 from '../assets/login-elements/star6.png';

function LandingPage() {
  return (
    <>
      <Box
        width='100%'
        height='100%'
        bg='principal'
      >
        <Image
          src={elipse2}
          alt='elipse'
          position='absolute'
          top='0'
          left='0'
        />
        <Image
          src={smoke1}
          alt='fumaça'
          position='absolute'
          top='0'
          right='0'
        />
        <Image
          src={star1}
          alt='estrela'
          position='absolute'
          top='585px'
          left='605px'
        />
        <Image
          src={smoke2}
          alt='fumaça'
          position='absolute'
          left='0'
        />
        <Image
          src={elipse1}
          alt='elipse'
          position='absolute'
          right='0'
          bottom='80'
        />
        <Image
          src={star3}
          alt='estrela'
          position='absolute'
          top='838px'
          left='1179px'
        />
        <Image
          src={star5}
          alt='estrela'
          position='absolute'
          top='1111px'
          left='1147px'
        />
        <Image
          src={star2}
          alt='estrela'
          position='absolute'
          top='1580px'
          left='124px'
        />
        <Image
          src={star6}
          alt='estrela'
          position='absolute'
          top='1625px'
          left='1221px'
        />
        <Image
          src={smoke3}
          alt='fumaça'
          position='absolute'
          right='0'
          bottom='10'
        />
        <Box
          py='10'
          px='40'
        >
          <NavBar />
          <MainContent />
          <CompanyLogos />
          <Pricing />
          <Divider
            mt='20'
            mb='4'
          />
          <Contact />
          <Divider mt='4' />
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default LandingPage;
