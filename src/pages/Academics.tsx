import { BookOpen, CheckCircle, Calendar, Users, Clock, ChevronRight } from 'lucide-react';

const classes = [
  { level: 'Playgroup', age: '2.5 – 3.5 yrs', students: 40, focus: 'Play-based learning, motor skills, social development' },
  { level: 'Nursery (LKG)', age: '3.5 – 4.5 yrs', students: 45, focus: 'Phonics, numbers, colors, creativity' },
  { level: 'Kindergarten (UKG)', age: '4.5 – 5.5 yrs', students: 48, focus: 'Reading readiness, basic maths, language skills' },
  { level: 'Grade 1 – 3', age: '5.5 – 9 yrs', students: 150, focus: 'Core subjects: Nepali, English, Maths, Science, Social' },
  { level: 'Grade 4 – 5', age: '9 – 12 yrs', students: 110, focus: 'Expanded curriculum, critical thinking, computer basics' },
  { level: 'Grade 6 – 8', age: '12 – 15 yrs', students: 180, focus: 'Secondary prep, optional subjects, labs, projects' },
  { level: 'Grade 9 – 10 (SEE)', age: '15 – 17 yrs', students: 140, focus: 'Board exam preparation, career counseling' },
];

const calendarEvents = [
  { month: 'Baisakh (Apr-May)', events: ['School Re-opens', 'Admission Process Begins', 'Sports Events'] },
  { month: 'Jestha (May-Jun)', events: ['First Monthly Exam', 'Parent-Teacher Meeting'] },
  { month: 'Ashadh (Jun-Jul)', events: ['Mid-Term Exams', 'Results Publication'] },
  { month: 'Shrawan (Jul-Aug)', events: ['Monsoon Break (1 week)', 'Science Exhibition'] },
  { month: 'Bhadra (Aug-Sep)', events: ['Second Term Begins', 'Cultural Program'] },
  { month: 'Ashwin (Sep-Oct)', events: ['Dashain Vacation (2 weeks)', 'Inter-House Competition'] },
  { month: 'Kartik (Oct-Nov)', events: ['Tihar Break', 'Annual Sports Day'] },
  { month: 'Mangsir (Nov-Dec)', events: ['Second Terminal Exam', 'Results & PTM'] },
  { month: 'Poush (Dec-Jan)', events: ['Winter Break', 'Annual Function'] },
  { month: 'Magh (Jan-Feb)', events: ['Third Term Begins', 'Pre-Board Exams (Gr 10)'] },
  { month: 'Falgun (Feb-Mar)', events: ['Final Exams (Gr 1–9)', 'SEE Practical Exams'] },
  { month: 'Chaitra (Mar-Apr)', events: ['SEE Board Exams', 'Results & Promotions'] },
];

export default function Academics() {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Academics</h1>
          <p className="text-blue-100">Classes offered, curriculum, teaching methodology, and academic calendar</p>
        </div>
      </div>

      {/* Classes Offered */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Programs</div>
            <h2 className="text-3xl font-bold text-gray-900">Classes We Offer</h2>
            <p className="text-gray-500 mt-2">From Playgroup to Secondary Level (Grade 10 / SEE)</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {classes.map((cls, i) => (
              <div key={cls.level} className={`rounded-xl p-5 border ${i % 3 === 0 ? 'border-blue-200 bg-blue-50' : i % 3 === 1 ? 'border-green-200 bg-green-50' : 'border-amber-200 bg-amber-50'} hover:shadow-md transition-shadow`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{cls.level}</h3>
                    <div className="text-sm text-gray-500">Age: {cls.age}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-700">{cls.students}</div>
                    <div className="text-xs text-gray-500">students</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{cls.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Curriculum</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">Comprehensive & Modern Curriculum</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our curriculum is aligned with the Curriculum Development Centre (CDC) of Nepal's national framework, enhanced with additional learning materials and co-curricular activities to ensure holistic development.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { subject: 'Nepali Language & Literature', grades: 'All Grades' },
                  { subject: 'English Language', grades: 'All Grades' },
                  { subject: 'Mathematics', grades: 'All Grades' },
                  { subject: 'Science & Technology', grades: 'Grade 1-10' },
                  { subject: 'Social Studies / Humanities', grades: 'Grade 1-10' },
                  { subject: 'Computer Science', grades: 'Grade 3-10' },
                  { subject: 'Health & Physical Education', grades: 'All Grades' },
                  { subject: 'Arts & Crafts / Music', grades: 'Grade 1-8' },
                  { subject: 'Optional Mathematics', grades: 'Grade 9-10' },
                  { subject: 'Moral Education', grades: 'All Grades' },
                ].map((s) => (
                  <div key={s.subject} className="flex items-center justify-between bg-white rounded-lg px-4 py-3 border border-gray-100">
                    <div className="flex items-center gap-2">
                      <BookOpen size={14} className="text-blue-600" />
                      <span className="text-gray-800 text-sm font-medium">{s.subject}</span>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{s.grades}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Methodology</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">Teaching Methodology</h2>
              <div className="space-y-4">
                {[
                  { title: 'Child-Centered Learning', desc: 'Lessons are tailored to individual learning styles, ensuring each child progresses at their own pace while meeting core standards.' },
                  { title: 'Activity-Based Teaching', desc: 'Hands-on activities, experiments, and projects make learning engaging and memorable for all age groups.' },
                  { title: 'Technology Integration', desc: 'Smart boards, projectors, and computer labs bring modern learning tools into every classroom.' },
                  { title: 'Regular Assessments', desc: 'Monthly tests, terminal exams, and continuous assessment ensure timely feedback and improvement.' },
                  { title: 'Parent Involvement', desc: 'Regular Parent-Teacher Meetings keep families informed and actively engaged in their child\'s progress.' },
                  { title: 'Co-curricular Activities', desc: 'Sports, debates, quiz competitions, cultural programs, and clubs develop well-rounded personalities.' },
                ].map((m) => (
                  <div key={m.title} className="flex gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm mb-1">{m.title}</div>
                      <div className="text-gray-500 text-sm">{m.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Schedule</div>
            <h2 className="text-3xl font-bold text-gray-900">Academic Calendar 2081 BS</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {calendarEvents.map((month) => (
              <div key={month.month} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={16} className="text-blue-600" />
                  <h4 className="font-semibold text-gray-900 text-sm">{month.month}</h4>
                </div>
                <ul className="space-y-1.5">
                  {month.events.map((event) => (
                    <li key={event} className="text-xs text-gray-600 flex items-start gap-1.5">
                      <ChevronRight size={12} className="text-green-500 mt-0.5 flex-shrink-0" />
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a href="#" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition">
              Download Full Academic Calendar (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
