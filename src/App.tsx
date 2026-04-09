import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Faculty from './pages/Faculty';
import Admissions from './pages/Admissions';
import Results from './pages/Results';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Facilities from './pages/Facilities';
import Contact from './pages/Contact';

export type Page =
  | 'home'
  | 'about'
  | 'academics'
  | 'faculty'
  | 'admissions'
  | 'results'
  | 'news'
  | 'gallery'
  | 'facilities'
  | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home navigate={navigate} />;
      case 'about': return <About />;
      case 'academics': return <Academics />;
      case 'faculty': return <Faculty />;
      case 'admissions': return <Admissions />;
      case 'results': return <Results />;
      case 'news': return <News />;
      case 'gallery': return <Gallery />;
      case 'facilities': return <Facilities />;
      case 'contact': return <Contact />;
      default: return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
