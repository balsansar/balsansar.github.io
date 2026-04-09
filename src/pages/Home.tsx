import { BookOpen, Users, Shield, Award, ArrowRight, Bell, UserPlus, Phone, Star, ChevronRight, Trophy, Calendar } from 'lucide-react';
import { Page } from '../App';

interface HomeProps {
  navigate: (page: Page) => void;
}

const highlights = [
  { icon: BookOpen, title: 'Quality Education', desc: 'Modern curriculum aligned with national standards, ensuring holistic development of every student.', color: 'bg-blue-100 text-blue-700' },
  { icon: Users, title: 'Experienced Faculty', desc: 'Dedicated and qualified teachers committed to nurturing every child\'s potential.', color: 'bg-green-100 text-green-700' },
  { icon: Shield, title: 'Safe Environment', desc: 'A secure and inclusive campus where every student feels valued and protected.', color: 'bg-amber-100 text-amber-700' },
  { icon: Award, title: 'Academic Excellence', desc: 'Consistent record of outstanding results and nationwide recognition.', color: 'bg-rose-100 text-rose-700' },
];

const testimonials = [
  { name: 'Sunita Tharu', role: 'Parent of Class 7 Student', text: 'Bal Sansar Academy has transformed my child. The teachers are caring, and the environment is truly motivating. Best decision we made.', rating: 5 },
  { name: 'Ramesh Chaudhary', role: 'Alumni – Batch 2075 BS', text: 'I owe my academic foundation to this school. The values and discipline instilled here shaped who I am today.', rating: 5 },
  { name: 'Kamala Oli', role: 'Parent of Class 10 Student', text: 'The school maintains excellent communication with parents. We always know how our child is progressing. Highly recommended!', rating: 5 },
];

const recentNews = [
  { date: 'Chaitra 15, 2080', title: 'Annual Sports Day 2080 – Grand Success', category: 'Event' },
  { date: 'Chaitra 10, 2080', title: 'SEE Exam Schedule Released – Class 10', category: 'Notice' },
  { date: 'Falgun 28, 2080', title: 'Scholarship Results for Academic Year 2081', category: 'Results' },
  { date: 'Falgun 20, 2080', title: 'Admission Open for Academic Year 2081 BS', category: 'Admission' },
];

const stats = [
  { value: '1200+', label: 'Students Enrolled' },
  { value: '50+', label: 'Qualified Teachers' },
  { value: '25+', label: 'Years of Excellence' },
  { value: '98%', label: 'Pass Rate' },
];

export default function Home({ navigate }: HomeProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-800/60" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 text-green-300 px-4 py-1.5 rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Admissions Open for 2081 BS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Welcome to<br />
              <span className="text-green-400">Bal Sansar</span> Academy
            </h1>
            <p className="text-blue-100 text-lg md:text-xl mb-3 font-medium">बाल संसार अकादेमी</p>
            <p className="text-blue-200 text-base md:text-lg leading-relaxed mb-8">
              Empowering young minds through quality education, strong values, and a nurturing environment. Building tomorrow's leaders from the heart of Dang, Nepal.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('admissions')}
                className="bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-3 rounded-lg transition-all flex items-center gap-2 shadow-lg hover:shadow-green-500/25"
              >
                <UserPlus size={18} /> Apply Now
              </button>
              <button
                onClick={() => navigate('about')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-8 py-3 rounded-lg transition-all flex items-center gap-2 backdrop-blur-sm"
              >
                Learn More <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats Bar */}
      <section className="bg-blue-800 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-blue-200 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-white py-6 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { label: 'Admissions', page: 'admissions' as Page, icon: UserPlus, color: 'bg-green-500' },
              { label: 'Notices', page: 'news' as Page, icon: Bell, color: 'bg-blue-600' },
              { label: 'Results', page: 'results' as Page, icon: Trophy, color: 'bg-amber-500' },
              { label: 'Contact Us', page: 'contact' as Page, icon: Phone, color: 'bg-rose-500' },
              { label: 'Academic Calendar', page: 'academics' as Page, icon: Calendar, color: 'bg-teal-600' },
            ].map((item) => (
              <button
                key={item.page}
                onClick={() => navigate(item.page)}
                className={`${item.color} hover:opacity-90 text-white flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-sm`}
              >
                <item.icon size={16} /> {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">About Our Academy</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                Shaping Futures, Building Character
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bal Sansar Academy, established in the heart of Gadhawa-6, Dang, has been a beacon of quality education for the local community. With over two decades of service, we have shaped thousands of young minds into responsible, capable citizens.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our institution offers education from Playgroup through Secondary level, combining modern teaching methodologies with traditional values. We believe every child deserves the best start in life.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => navigate('about')}
                  className="bg-blue-700 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition flex items-center gap-2"
                >
                  Our Story <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => navigate('academics')}
                  className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition"
                >
                  Academics
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/8613042/pexels-photo-8613042.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Students learning"
                className="rounded-xl w-full h-48 object-cover shadow-md"
              />
              <img
                src="https://images.pexels.com/photos/8613172/pexels-photo-8613172.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Classroom"
                className="rounded-xl w-full h-48 object-cover shadow-md mt-6"
              />
              <img
                src="https://images.pexels.com/photos/8613318/pexels-photo-8613318.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="School activities"
                className="rounded-xl w-full h-48 object-cover shadow-md"
              />
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Teachers"
                className="rounded-xl w-full h-48 object-cover shadow-md mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Why Choose Us</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Sets Us Apart</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color} mb-4`}>
                  <item.icon size={22} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Notices */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-2">Latest Updates</div>
              <h2 className="text-3xl font-bold text-gray-900">News & Notices</h2>
            </div>
            <button onClick={() => navigate('news')} className="text-blue-700 hover:text-blue-600 font-semibold flex items-center gap-1 text-sm">
              View All <ChevronRight size={16} />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentNews.map((news) => (
              <div key={news.title} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100 cursor-pointer" onClick={() => navigate('news')}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    news.category === 'Notice' ? 'bg-red-100 text-red-700' :
                    news.category === 'Event' ? 'bg-blue-100 text-blue-700' :
                    news.category === 'Results' ? 'bg-green-100 text-green-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>{news.category}</span>
                  <span className="text-xs text-gray-400">{news.date}</span>
                </div>
                <h4 className="font-medium text-gray-800 text-sm leading-snug">{news.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</div>
            <h2 className="text-3xl md:text-4xl font-bold">What Our Community Says</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-blue-800/50 backdrop-blur rounded-xl p-6 border border-blue-700/30">
                <div className="flex mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-blue-100 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-blue-300 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Begin Your Child's Journey with Us</h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Admissions are now open for the 2081 BS academic year. Join the Bal Sansar family and give your child the education they deserve.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('admissions')}
              className="bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-3 rounded-lg transition flex items-center gap-2 shadow-lg"
            >
              <UserPlus size={18} /> Apply Now
            </button>
            <button
              onClick={() => navigate('contact')}
              className="bg-green-500 hover:bg-green-400 text-white border border-green-400 font-bold px-8 py-3 rounded-lg transition flex items-center gap-2"
            >
              <Phone size={18} /> Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
