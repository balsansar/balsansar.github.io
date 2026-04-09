import { useState } from 'react';
import { Bell, Calendar, Tag, ChevronRight, Download, Search } from 'lucide-react';

const allItems = [
  { id: 1, type: 'Notice', date: 'Chaitra 15, 2080', title: 'School Closed – Chaitra 16 to 21 (Annual Vacation)', category: 'Holiday', important: true, desc: 'The school will remain closed from Chaitra 16 to Chaitra 21 for the annual spring vacation. Classes will resume on Chaitra 22, 2080.' },
  { id: 2, type: 'Notice', date: 'Chaitra 12, 2080', title: 'SEE Final Exam Schedule 2080 Published', category: 'Exam', important: true, desc: 'The SEE (Secondary Education Examination) schedule for Grade 10 students has been published. Exams begin from Chaitra 24, 2080.' },
  { id: 3, type: 'Event', date: 'Chaitra 10, 2080', title: 'Annual Sports Day 2080 – A Grand Success', category: 'Sports', important: false, desc: 'The Annual Sports Day was held on Chaitra 8, 2080. Students showed exceptional talent in athletics, team sports, and creative events. Congratulations to all winners!' },
  { id: 4, type: 'Notice', date: 'Chaitra 5, 2080', title: 'Fee Due Reminder – Chaitra Month', category: 'Fees', important: true, desc: 'Parents and guardians are kindly reminded that school fees for Chaitra month are due by Chaitra 10. Please clear outstanding dues to avoid late charges.' },
  { id: 5, type: 'Achievement', date: 'Falgun 28, 2080', title: 'Bal Sansar Students Win District Quiz Competition', category: 'Achievement', important: false, desc: 'Our Grade 9 and 10 students secured 1st place in the District Level General Knowledge Quiz Competition organized by DEO Dang.' },
  { id: 6, type: 'Event', date: 'Falgun 20, 2080', title: 'Science Exhibition 2080 – Innovative Student Projects', category: 'Event', important: false, desc: 'The annual Science Exhibition was held showcasing over 40 student projects. Three projects have been selected for the Zonal Level competition.' },
  { id: 7, type: 'Notice', date: 'Falgun 15, 2080', title: 'Admission Open – Academic Year 2081 BS', category: 'Admission', important: true, desc: 'Admissions for the new academic year 2081 BS are now open. Limited seats available in all grades. Contact the school office for details.' },
  { id: 8, type: 'Notice', date: 'Magh 25, 2080', title: 'Parent-Teacher Meeting – Magh 28, 2080', category: 'PTM', important: false, desc: 'A Parent-Teacher Meeting has been scheduled for Magh 28, 2080 from 10:00 AM to 2:00 PM. All parents are requested to attend.' },
  { id: 9, type: 'Event', date: 'Magh 15, 2080', title: 'Annual Prize Distribution Ceremony 2079', category: 'Event', important: false, desc: 'The Annual Prize Distribution Ceremony for the academic year 2079 was held with great enthusiasm. Chief Guest: Ward Chairman Gadhawa-6.' },
];

const categories = ['All', 'Notice', 'Event', 'Achievement', 'Exam', 'Holiday', 'Admission'];

const examSchedules = [
  { exam: 'First Terminal Exam', dates: 'Ashadh 10–18, 2081', grades: 'Grade 1–10' },
  { exam: 'Second Terminal Exam', dates: 'Mangsir 5–15, 2081', grades: 'Grade 1–10' },
  { exam: 'Pre-Board Exam', dates: 'Magh 5–12, 2082', grades: 'Grade 10 Only' },
  { exam: 'Final Exam (Internal)', dates: 'Falgun 5–18, 2082', grades: 'Grade 1–9' },
  { exam: 'SEE Board Exam', dates: 'Chaitra (TBD), 2082', grades: 'Grade 10 Only' },
];

export default function News() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = allItems.filter((item) => {
    const matchCat = filter === 'All' || item.type === filter || item.category === filter;
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">News & Notices</h1>
          <p className="text-blue-100">Latest announcements, events, and updates from Bal Sansar Academy</p>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search notices..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    filter === cat
                      ? 'bg-blue-700 text-white'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {filtered.length === 0 ? (
                <div className="bg-white rounded-xl p-10 text-center text-gray-500">No notices found.</div>
              ) : filtered.map((item) => (
                <div key={item.id} className={`bg-white rounded-xl border ${item.important ? 'border-l-4 border-l-red-500 border-gray-100' : 'border-gray-100'} shadow-sm overflow-hidden`}>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        {item.important && (
                          <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full">IMPORTANT</span>
                        )}
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          item.type === 'Notice' ? 'bg-blue-100 text-blue-700' :
                          item.type === 'Event' ? 'bg-purple-100 text-purple-700' :
                          'bg-green-100 text-green-700'
                        }`}>{item.type}</span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Calendar size={11} /> {item.date}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 cursor-pointer hover:text-blue-700 transition" onClick={() => setExpanded(expanded === item.id ? null : item.id)}>
                      {item.title}
                    </h3>
                    {expanded === item.id && (
                      <p className="text-gray-600 text-sm leading-relaxed mt-2">{item.desc}</p>
                    )}
                    <button
                      onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                      className="text-blue-600 text-xs font-medium flex items-center gap-1 mt-2 hover:text-blue-800"
                    >
                      {expanded === item.id ? 'Read less' : 'Read more'} <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {/* Exam Schedule */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Calendar size={16} className="text-blue-600" /> Exam Schedule 2081
                </h3>
                <div className="space-y-3">
                  {examSchedules.map((exam) => (
                    <div key={exam.exam} className="border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                      <div className="font-medium text-gray-800 text-sm">{exam.exam}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{exam.dates}</div>
                      <div className="text-blue-600 text-xs">{exam.grades}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Downloads */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Download size={16} className="text-green-600" /> Downloads
                </h3>
                <div className="space-y-2">
                  {[
                    'Admission Form 2081 BS',
                    'Academic Calendar 2081',
                    'SEE Exam Routine',
                    'Scholarship Form',
                    'Fee Challan',
                  ].map((doc) => (
                    <a key={doc} href="#" className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-700 py-2 border-b border-gray-50 last:border-0 transition-colors">
                      <Download size={13} className="text-green-500" /> {doc}
                    </a>
                  ))}
                </div>
              </div>

              {/* Holiday Notice */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <Bell size={16} /> Upcoming Holidays
                </h3>
                <div className="space-y-2">
                  {[
                    { name: 'Baisakh 1 (New Year)', date: 'Baisakh 1, 2081' },
                    { name: 'Buddha Jayanti', date: 'Baisakh 17, 2081' },
                    { name: 'Republic Day', date: 'Jestha 15, 2081' },
                    { name: 'Teej Festival', date: 'Bhadra 19, 2081' },
                    { name: 'Dashain Vacation', date: 'Ashwin 24 – Kartik 5' },
                  ].map((h) => (
                    <div key={h.name} className="flex justify-between text-sm">
                      <span className="text-amber-800">{h.name}</span>
                      <span className="text-amber-600 text-xs">{h.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
