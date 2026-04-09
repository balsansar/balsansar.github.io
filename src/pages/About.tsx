import { Target, Eye, Heart, CheckCircle, Quote } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Compassion', desc: 'We care for every student\'s well-being, growth, and happiness.' },
  { icon: CheckCircle, title: 'Integrity', desc: 'We uphold honesty, transparency, and ethical conduct at all times.' },
  { icon: Target, title: 'Excellence', desc: 'We strive for the highest standards in teaching and learning.' },
  { icon: Eye, title: 'Inclusivity', desc: 'Every student, regardless of background, deserves equal opportunity.' },
];

function PageHeader({ title, subtitle, bg }: { title: string; subtitle: string; bg: string }) {
  return (
    <div className={`${bg} py-12 px-4`}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
        <p className="text-blue-100">{subtitle}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div>
      <PageHeader
        title="About Bal Sansar Academy"
        subtitle="Our story, mission, vision, and the values that guide us"
        bg="bg-gradient-to-r from-blue-900 to-blue-700"
      />

      {/* History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Our History</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">Two Decades of Educational Legacy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bal Sansar Academy was founded with a vision to provide quality education to the children of Gadhawa and surrounding villages of Dang district. Established in the heart of the community, our academy began with a handful of students and a passionate team of educators determined to make a difference.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Over the years, we have grown significantly — expanding our infrastructure, faculty, and programs to meet the evolving educational needs of our students. Today, we proudly serve over 1,200 students from Playgroup to Secondary level, maintaining our founding commitment to excellence, character-building, and community service.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our academy has consistently produced top performers in district and national examinations, and our alumni are contributing to society as doctors, engineers, teachers, and entrepreneurs across Nepal.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8612927/pexels-photo-8612927.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="School building"
                className="rounded-2xl w-full h-80 object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-700 text-white p-5 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">25+</div>
                <div className="text-blue-200 text-sm">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-700 text-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-5">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed mb-4">
                To provide a nurturing, inclusive, and stimulating learning environment that empowers every student to achieve academic excellence, develop strong moral values, and become a responsible, contributing member of society.
              </p>
              <ul className="space-y-2">
                {[
                  'Deliver quality, student-centered education',
                  'Foster critical thinking and creativity',
                  'Build character and ethical leadership',
                  'Engage families and community in learning',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-blue-100 text-sm">
                    <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-700 text-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-5">
                <Eye size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-green-100 leading-relaxed mb-4">
                To be the leading educational institution in Dang district — recognized for academic rigor, innovative teaching, and producing graduates who are not just academically accomplished, but empathetic, ethical, and globally aware.
              </p>
              <ul className="space-y-2">
                {[
                  'Be a model school in Lumbini Province',
                  'Integrate technology in all classrooms',
                  'Develop globally competitive graduates',
                  'Create a sustainable, green campus',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-green-100 text-sm">
                    <CheckCircle size={16} className="text-green-300 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Message From</div>
            <h2 className="text-3xl font-bold text-gray-900">Principal's Message</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-2xl p-8 md:p-12 relative">
              <Quote size={48} className="text-blue-200 absolute top-6 left-6" />
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 text-center">
                  <img
                    src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Principal"
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-blue-200 shadow-md"
                  />
                  <div className="mt-3">
                    <div className="font-bold text-gray-900">Mr. Ramji Prasad Sharma</div>
                    <div className="text-blue-700 text-sm">Principal</div>
                    <div className="text-gray-500 text-xs mt-1">M.Ed., B.Ed.</div>
                  </div>
                </div>
                <div className="flex-1 pt-8">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Dear Students, Parents, and Guardians,
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    It is my privilege and honor to lead Bal Sansar Academy — an institution that has been shaping futures and transforming lives in our beloved Dang community. Education is not merely about academic achievement; it is about building character, cultivating curiosity, and preparing young people to face life's challenges with confidence and compassion.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    At Bal Sansar Academy, we believe every child carries immense potential. Our dedicated faculty and staff work tirelessly to unlock that potential and provide an environment where learning is joyful, meaningful, and impactful.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    I invite you to be part of our growing family. Together, we can build a brighter Nepal — one child at a time.
                  </p>
                  <div className="mt-4 text-blue-700 font-semibold">With warm regards,</div>
                  <div className="font-bold text-gray-900">Mr. Ramji Prasad Sharma</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Foundation</div>
            <h2 className="text-3xl font-bold text-gray-900">Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  i === 0 ? 'bg-rose-100 text-rose-600' :
                  i === 1 ? 'bg-blue-100 text-blue-600' :
                  i === 2 ? 'bg-amber-100 text-amber-600' :
                  'bg-green-100 text-green-600'
                }`}>
                  <v.icon size={24} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
