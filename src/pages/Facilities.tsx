import { BookOpen, Monitor, FlaskConical, Bus, Trees, Shield, Utensils, Wifi } from 'lucide-react';

const facilities = [
  {
    icon: BookOpen,
    title: 'Library',
    desc: 'Our well-stocked library houses over 5,000 books including textbooks, reference materials, story books, encyclopedias, and Nepali literature. Students can access newspapers and educational magazines daily.',
    img: 'https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['5,000+ books', 'Digital catalog', 'Reading room', 'Newspapers & magazines'],
    color: 'bg-blue-50 border-blue-200',
    accent: 'text-blue-700',
  },
  {
    icon: Monitor,
    title: 'Computer Laboratory',
    desc: 'A fully equipped computer lab with 30 modern computers and reliable internet connectivity. Students from Grade 3 onwards receive practical ICT training as part of the curriculum.',
    img: 'https://images.pexels.com/photos/8617681/pexels-photo-8617681.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['30 computers', 'High-speed internet', 'Projector & smart board', 'Licensed software'],
    color: 'bg-green-50 border-green-200',
    accent: 'text-green-700',
  },
  {
    icon: FlaskConical,
    title: 'Science Laboratory',
    desc: 'A dedicated science lab equipped for biology, chemistry, and physics experiments. Students gain practical experience through hands-on experimentation and research activities.',
    img: 'https://images.pexels.com/photos/8612927/pexels-photo-8612927.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Biology, Chemistry & Physics', 'Safety equipment', 'Modern lab instruments', 'Regular practicals'],
    color: 'bg-amber-50 border-amber-200',
    accent: 'text-amber-700',
  },
  {
    icon: Trees,
    title: 'Playground & Sports',
    desc: 'A spacious playground supporting football, volleyball, cricket, athletics, and other outdoor activities. Physical education is a core part of our holistic education approach.',
    img: 'https://images.pexels.com/photos/8613318/pexels-photo-8613318.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Football ground', 'Volleyball court', 'Athletics track', 'Indoor games room'],
    color: 'bg-teal-50 border-teal-200',
    accent: 'text-teal-700',
  },
  {
    icon: Bus,
    title: 'School Transportation',
    desc: 'Safe and reliable school bus service covering Gadhawa and surrounding areas. All vehicles are regularly inspected and driven by trained, experienced drivers.',
    img: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['3 school buses', 'GPS tracking', 'Trained drivers', 'Route coverage: 15km radius'],
    color: 'bg-orange-50 border-orange-200',
    accent: 'text-orange-700',
  },
  {
    icon: Shield,
    title: 'Safety & Security',
    desc: 'The campus is secured with CCTV cameras at all major points, a trained security guard, and strict visitor protocols to ensure every child\'s safety throughout the school day.',
    img: 'https://images.pexels.com/photos/8613172/pexels-photo-8613172.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['CCTV surveillance', 'Security guard', 'Visitor management', 'First aid station'],
    color: 'bg-rose-50 border-rose-200',
    accent: 'text-rose-700',
  },
  {
    icon: Utensils,
    title: 'Canteen',
    desc: 'A hygienic school canteen offering nutritious and affordable meals and snacks. The menu is designed to encourage healthy eating habits among students.',
    img: 'https://images.pexels.com/photos/8613042/pexels-photo-8613042.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Hygienic kitchen', 'Nutritious menu', 'Affordable prices', 'Clean dining area'],
    color: 'bg-yellow-50 border-yellow-200',
    accent: 'text-yellow-700',
  },
  {
    icon: Wifi,
    title: 'Smart Classrooms',
    desc: 'Equipped with projectors, smart boards, and digital learning tools, our classrooms bring lessons to life and prepare students for the digital age.',
    img: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Interactive whiteboards', 'Projectors in all rooms', 'Digital resources', 'Ergonomic furniture'],
    color: 'bg-cyan-50 border-cyan-200',
    accent: 'text-cyan-700',
  },
];

export default function Facilities() {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Facilities</h1>
          <p className="text-blue-100">Modern infrastructure designed to support quality learning and student well-being</p>
        </div>
      </div>

      {/* Overview */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Infrastructure</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Excellence</h2>
            <p className="text-gray-600 leading-relaxed">
              At Bal Sansar Academy, we invest in world-class facilities because we believe the environment shapes the learner. Our campus provides every tool, space, and resource needed for a complete educational experience.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              { value: '20+', label: 'Classrooms' },
              { value: '2', label: 'Science Labs' },
              { value: '1', label: 'Computer Lab' },
              { value: '5000+', label: 'Library Books' },
            ].map((stat) => (
              <div key={stat.label} className="bg-blue-50 rounded-xl p-5">
                <div className="text-3xl font-bold text-blue-800">{stat.value}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {facilities.map((facility) => (
              <div key={facility.title} className={`rounded-2xl border overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all ${facility.color}`}>
                <div className="grid sm:grid-cols-2">
                  <img
                    src={facility.img}
                    alt={facility.title}
                    className="w-full h-52 sm:h-full object-cover"
                  />
                  <div className="p-6">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${facility.color}`}>
                      <facility.icon size={20} className={facility.accent} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2">{facility.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{facility.desc}</p>
                    <ul className="space-y-1.5">
                      {facility.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
