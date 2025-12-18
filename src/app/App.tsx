import { HomePage } from '@/pages/home/ui/HomePage';
import { Header } from './layouts/Header';
import { Footer } from './layouts/Footer';

function App() {
  return (
    <div style={{position: 'relative', paddingTop: '32px'}}>
      <div style={{
        position: 'absolute',
        top: '0',
        background: 'linear-gradient(180deg, #E9E9E9 40%, #FFFFFF 100%)',
        height: '100dvh',
        width: '100%'
      }}/>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
