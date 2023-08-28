import NavBar from '../components/NavBar/NavBar';
import MainContent from '../components/MainContent/MainContent';
import CompanyLogos from '../components/CompanyLogos/CompanyLogos';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import Pricing from '../components/Pricing/Pricing';

function LandingPage() {
  return (
    <>
      <NavBar />
      <MainContent />
      <CompanyLogos />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default LandingPage;
