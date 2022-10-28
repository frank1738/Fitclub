import './App.css';
import Headline from './components/Headline/Headline';
import Programs from './components/programs/Programs';
import Services from './components/services/Services';
import Payment from './components/payments/Payment';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Headline />
      <Programs />
      <Services />
      <Payment />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
