import { HomePage } from '@/pages/home/ui/HomePage';
import { Header } from './Header';
import { Footer } from './Footer';

function App() {
  return (
    <div style={{paddingTop: '32px'}}>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
