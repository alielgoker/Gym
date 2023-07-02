import './App.css';
import Hero from './component/Hero/Hero.jsx'
import Program from './component/programs/Program'
import Reasons from './component/reasons/Reasons'
import Plan from './component/plan/Plan'
import Testimonials from './component/testimonials/Testimonials'
import Join from './component/join/Join'
import Footer from './component/footer/Footer'
function App() {
  return (
    <div className="App">
      < Hero />
      < Program />
      < Reasons />
      < Plan />
      <Testimonials />
      <Join />
      < Footer />
    </div>
  );
}

export default App;