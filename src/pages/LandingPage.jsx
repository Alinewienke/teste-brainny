import { Box } from '@chakra-ui/react';

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
        <Contact />
        <Footer />
      </Box>
    </>
  );
}

export default LandingPage;
