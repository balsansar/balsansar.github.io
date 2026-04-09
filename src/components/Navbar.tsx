import { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const navItems: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About Us', page: 'about' },
  { label: 'Academics', page: 'academics' },
  { label: 'Faculty', page: 'faculty' },
  { label: 'Admissions', page: 'admissions' },
  { label: 'Results', page: 'results' },
  { label: 'News & Notices', page: 'news' },
  { label: 'Gallery', page: 'gallery' },
  { label: 'Facilities', page: 'facilities' },
  { label: 'Contact', page: 'contact' },
];

export default function Navbar({ currentPage, navigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'ne'>('en');

  const handleNav = (page: Page) => {
    navigate(page);
    setIsOpen(false);
  };

  return (
    <>
      <div className="bg-blue-900 text-white text-xs py-1.5 px-4 flex justify-between items-center">
        <span>Gadhawa-6, Dang, Nepal &nbsp;|&nbsp; +977-082-XXXXXX &nbsp;|&nbsp; info@balsansaracademy.edu.np</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === 'en' ? 'ne' : 'en')}
            className="bg-blue-700 hover:bg-blue-600 px-3 py-0.5 rounded text-xs transition"
          >
            {lang === 'en' ? 'नेपाली' : 'English'}
          </button>
          <button
            onClick={() => navigate('admissions')}
            className="bg-green-600 hover:bg-green-500 px-3 py-0.5 rounded text-xs transition"
          >
            Student Portal
          </button>
        </div>
      </div>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => handleNav('home')} className="flex items-center gap-3">
              <div className="bg-blue-700 p-2 rounded-lg">
                <GraduationCap className="text-white" size={22} />
              </div>
              <div className="text-left">
                <div className="font-bold text-blue-900 text-base leading-tight">
                  {lang === 'en' ? 'Bal Sansar Academy' : 'बाल संसार अकादेमी'}
                </div>
                <div className="text-xs text-gray-500">Gadhawa-6, Dang, Nepal</div>
              </div>
            </button>

            <div className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNav(item.page)}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                    currentPage === item.page
                      ? 'text-blue-700 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`w-full text-left px-6 py-3 text-sm font-medium border-b border-gray-50 transition-colors ${
                  currentPage === item.page
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
