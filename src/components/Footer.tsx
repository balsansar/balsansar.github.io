import { GraduationCap, MapPin, Phone, Mail, Facebook, Youtube, Twitter, ExternalLink } from 'lucide-react';
import { Page } from '../App';

interface FooterProps {
  navigate: (page: Page) => void;
}

export default function Footer({ navigate }: FooterProps) {
  const quickLinks: { label: string; page: Page }[] = [
    { label: 'About Us', page: 'about' },
    { label: 'Academics', page: 'academics' },
    { label: 'Faculty & Staff', page: 'faculty' },
    { label: 'Admissions', page: 'admissions' },
    { label: 'Results & Achievements', page: 'results' },
    { label: 'News & Notices', page: 'news' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Facilities', page: 'facilities' },
    { label: 'Contact Us', page: 'contact' },
  ];

  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-700 p-2 rounded-lg">
                <GraduationCap className="text-white" size={22} />
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">Bal Sansar Academy</div>
                <div className="text-xs text-blue-300">बाल संसार अकादेमी</div>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Nurturing young minds with quality education, values, and a vision for a brighter future. Serving the community of Dang since its establishment.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-blue-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                <Youtube size={16} />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigate(link.page)}
                    className="text-blue-200 hover:text-white text-sm transition-colors flex items-center gap-1"
                  >
                    <span className="text-green-400">›</span> {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 text-white">Downloads</h3>
            <ul className="space-y-2">
              {[
                'Admission Form 2081 BS',
                'Fee Structure 2081-82',
                'Academic Calendar',
                'Scholarship Form',
                'Transfer Certificate Form',
                'Exam Schedule 2081',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors flex items-center gap-1">
                    <ExternalLink size={12} className="text-green-400" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-blue-200 text-sm">Gadhawa-6, Dang, Lumbini Province, Nepal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-green-400 flex-shrink-0" />
                <span className="text-blue-200 text-sm">+977-082-XXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-green-400 flex-shrink-0" />
                <span className="text-blue-200 text-sm">+977-9XXXXXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-green-400 flex-shrink-0" />
                <span className="text-blue-200 text-sm">info@balsansaracademy.edu.np</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-blue-900 rounded-lg">
              <p className="text-xs text-blue-300">Office Hours</p>
              <p className="text-sm text-white">Sun – Fri: 9:30 AM – 4:30 PM</p>
              <p className="text-sm text-white">Saturday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-900 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-blue-300">
          <p>© 2024 Bal Sansar Academy, Gadhawa-6, Dang, Nepal. All rights reserved.</p>
          <p>Affiliated with Nepal Government | Reg. No: XXXXXXXX</p>
        </div>
      </div>
    </footer>
  );
}
