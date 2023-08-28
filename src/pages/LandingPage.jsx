import { Box, Divider } from '@chakra-ui/react';

import NavBar from '../components/NavBar/NavBar';
import MainContent from '../components/MainContent/MainContent';
import CompanyLogos from '../components/CompanyLogos/CompanyLogos';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import Pricing from '../components/Pricing/Pricing';

function LandingPage() {
  return (
    <>
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
    </>
  );
}

export default LandingPage;
