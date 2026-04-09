import { Mail, Phone, Award } from 'lucide-react';

const teachers = [
  { name: 'Mr. Ramji Prasad Sharma', subject: 'Science & Head of Secondary', qualification: 'M.Sc., B.Ed.', role: 'Senior Teacher', exp: '18 yrs', img: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Mrs. Sita Devi Paudel', subject: 'Nepali Language & Literature', qualification: 'M.A. Nepali, B.Ed.', role: 'Senior Teacher', exp: '15 yrs', img: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Mr. Bishnu Bahadur Thapa', subject: 'Mathematics', qualification: 'M.Sc. Maths, B.Ed.', role: 'Teacher', exp: '12 yrs', img: 'https://images.pexels.com/photos/8617843/pexels-photo-8617843.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Ms. Anita Kumari Chaudhary', subject: 'English Language', qualification: 'M.A. English, B.Ed.', role: 'Teacher', exp: '10 yrs', img: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Mr. Hari Prasad Neupane', subject: 'Social Studies & Civics', qualification: 'B.A., B.Ed.', role: 'Teacher', exp: '9 yrs', img: 'https://images.pexels.com/photos/8617681/pexels-photo-8617681.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Ms. Kamala Sharma', subject: 'Computer Science & IT', qualification: 'B.Sc. CSIT, B.Ed.', role: 'Teacher', exp: '7 yrs', img: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Mr. Deepak Raj Oli', subject: 'Health & Physical Education', qualification: 'B.P.Ed.', role: 'Teacher', exp: '8 yrs', img: 'https://images.pexels.com/photos/8617843/pexels-photo-8617843.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Ms. Puja Tharu', subject: 'Arts, Music & Playgroup', qualification: 'B.A., B.Ed.', role: 'Teacher', exp: '5 yrs', img: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Mr. Ram Kumar Chaudhary', subject: 'Optional Mathematics', qualification: 'M.Sc. Maths', role: 'Teacher', exp: '11 yrs', img: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const adminStaff = [
  { name: 'Mr. Laxman Prasad Acharya', role: 'School Director', dept: 'Administration' },
  { name: 'Mrs. Mina Devi Bhatt', role: 'Academic Coordinator', dept: 'Academics' },
  { name: 'Mr. Suresh Kumar Yadav', role: 'Accountant', dept: 'Finance' },
  { name: 'Ms. Gita Kumari Shrestha', role: 'Administrative Officer', dept: 'Administration' },
  { name: 'Mr. Khem Raj Poudel', role: 'Librarian', dept: 'Library' },
  { name: 'Mrs. Savitri Mahato', role: 'Head Nurse / Health Officer', dept: 'Health' },
];

export default function Faculty() {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Faculty & Staff</h1>
          <p className="text-blue-100">Meet our dedicated team of educators and administrative staff</p>
        </div>
      </div>

      {/* Teaching Staff */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Educators</div>
            <h2 className="text-3xl font-bold text-gray-900">Teaching Faculty</h2>
            <p className="text-gray-500 mt-2">Experienced, qualified, and passionate educators committed to student success</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher) => (
              <div key={teacher.name} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group">
                <div className="flex items-start gap-4">
                  <img
                    src={teacher.img}
                    alt={teacher.name}
                    className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-base leading-tight">{teacher.name}</h3>
                    <div className="text-blue-700 text-sm font-medium mt-0.5">{teacher.subject}</div>
                    <div className="text-gray-500 text-xs mt-1">{teacher.qualification}</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Award size={12} className="text-amber-500" />
                    <span>{teacher.exp} experience</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    teacher.role === 'Senior Teacher' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {teacher.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administrative Staff */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Support Team</div>
            <h2 className="text-3xl font-bold text-gray-900">Administrative Staff</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {adminStaff.map((staff) => (
              <div key={staff.name} className="bg-white rounded-xl p-5 border border-gray-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-700 font-bold text-lg">
                  {staff.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{staff.name}</div>
                  <div className="text-blue-700 text-sm">{staff.role}</div>
                  <div className="text-gray-400 text-xs">{staff.dept}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-12 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Join Our Team</h2>
          <p className="text-blue-200 mb-6">We are always looking for passionate, qualified educators to join our growing family at Bal Sansar Academy.</p>
          <a href="mailto:info@balsansaracademy.edu.np" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-lg transition">
            <Mail size={16} /> Send Your Application
          </a>
        </div>
      </section>
    </div>
  );
}
