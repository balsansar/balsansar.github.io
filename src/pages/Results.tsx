import { Trophy, Medal, Star, TrendingUp, Award } from 'lucide-react';

const seeResults = [
  { year: '2080 BS', appeared: 42, passed: 41, gpa35: 18, gpa40: 12, passRate: '97.6%', topStudent: 'Sanjay Tharu (3.90 GPA)' },
  { year: '2079 BS', appeared: 38, passed: 37, gpa35: 14, gpa40: 9, passRate: '97.4%', topStudent: 'Rima Chaudhary (3.85 GPA)' },
  { year: '2078 BS', appeared: 35, passed: 34, gpa35: 12, gpa40: 7, passRate: '97.1%', topStudent: 'Arjun Neupane (3.88 GPA)' },
  { year: '2077 BS', appeared: 30, passed: 29, gpa35: 10, gpa40: 5, passRate: '96.7%', topStudent: 'Priya Sharma (3.82 GPA)' },
];

const toppers = [
  { name: 'Sanjay Tharu', grade: 'SEE 2080', gpa: '3.90', rank: 1, subject: 'Science', img: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Anita Kumari Bhatt', grade: 'Grade 9 (2080)', gpa: '97.5%', rank: 1, subject: 'Mathematics', img: 'https://images.pexels.com/photos/8613042/pexels-photo-8613042.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Bimal Raj Paudel', grade: 'Grade 8 (2080)', gpa: '95.8%', rank: 1, subject: 'Science', img: 'https://images.pexels.com/photos/8613172/pexels-photo-8613172.jpeg?auto=compress&cs=tinysrgb&w=200' },
];

const achievements = [
  { year: '2080', title: 'District Quiz Champion', level: 'District Level', category: 'Academic' },
  { year: '2080', title: '1st Prize – Science Exhibition', level: 'Zonal Level', category: 'Academic' },
  { year: '2080', title: 'Inter-School Debate – 1st Place', level: 'District Level', category: 'Co-curricular' },
  { year: '2079', title: 'Best School Award – Dang District', level: 'District Level', category: 'Institutional' },
  { year: '2079', title: 'Football Tournament – Champions', level: 'District Level', category: 'Sports' },
  { year: '2079', title: 'Mathematics Olympiad – 2nd Place', level: 'Regional Level', category: 'Academic' },
  { year: '2079', title: 'Cultural Program – Best School', level: 'Zonal Level', category: 'Cultural' },
  { year: '2078', title: 'Volleyball Champions', level: 'District Level', category: 'Sports' },
];

export default function Results() {
  return (
    <div>
      <div className="bg-gradient-to-r from-amber-700 to-amber-500 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Results & Achievements</h1>
          <p className="text-amber-100">Our academic excellence and student accomplishments</p>
        </div>
      </div>

      {/* Achievement Stats */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '97.6%', label: 'SEE Pass Rate 2080' },
              { value: '18', label: 'Students with GPA 3.5+' },
              { value: '12', label: 'Students with GPA 4.0' },
              { value: '25+', label: 'Awards This Year' },
            ].map((stat) => (
              <div key={stat.label} className="p-4">
                <div className="text-3xl font-bold text-blue-800">{stat.value}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEE Results Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Board Exams</div>
            <h2 className="text-3xl font-bold text-gray-900">SEE Results – Year Wise</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <thead>
                <tr className="bg-blue-800 text-white">
                  <th className="text-left px-6 py-4">Year</th>
                  <th className="text-center px-6 py-4">Appeared</th>
                  <th className="text-center px-6 py-4">Passed</th>
                  <th className="text-center px-6 py-4">GPA 3.5+</th>
                  <th className="text-center px-6 py-4">GPA 4.0</th>
                  <th className="text-center px-6 py-4">Pass Rate</th>
                  <th className="text-left px-6 py-4">Top Student</th>
                </tr>
              </thead>
              <tbody>
                {seeResults.map((row, i) => (
                  <tr key={row.year} className={`border-t border-gray-50 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{row.year}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.appeared}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.passed}</td>
                    <td className="px-6 py-4 text-center text-blue-700 font-medium">{row.gpa35}</td>
                    <td className="px-6 py-4 text-center text-green-700 font-medium">{row.gpa40}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">{row.passRate}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{row.topStudent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Top Performers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Top Performers</div>
            <h2 className="text-3xl font-bold text-gray-900">Academic Toppers 2080 BS</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {toppers.map((topper, i) => (
              <div key={topper.name} className="bg-gradient-to-b from-amber-50 to-white rounded-2xl p-6 border border-amber-100 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="relative inline-block mb-4">
                  <img src={topper.img} alt={topper.name} className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-amber-200" />
                  <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow ${
                    i === 0 ? 'bg-amber-500' : i === 1 ? 'bg-gray-400' : 'bg-amber-700'
                  }`}>
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{topper.name}</h3>
                <div className="text-gray-500 text-sm mb-2">{topper.grade}</div>
                <div className="text-2xl font-bold text-amber-600 mb-1">{topper.gpa}</div>
                <div className="text-xs text-gray-400">Best in: {topper.subject}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Recognition</div>
            <h2 className="text-3xl font-bold text-gray-900">Awards & Achievements</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((a) => (
              <div key={a.title + a.year} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    a.category === 'Academic' ? 'bg-blue-100 text-blue-700' :
                    a.category === 'Sports' ? 'bg-green-100 text-green-700' :
                    a.category === 'Institutional' ? 'bg-amber-100 text-amber-700' :
                    'bg-rose-100 text-rose-700'
                  }`}>
                    {a.category === 'Sports' ? <Trophy size={14} /> : <Award size={14} />}
                  </div>
                  <span className="text-xs text-gray-400">{a.year} BS</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{a.title}</h4>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500">{a.level}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    a.category === 'Academic' ? 'bg-blue-100 text-blue-700' :
                    a.category === 'Sports' ? 'bg-green-100 text-green-700' :
                    a.category === 'Institutional' ? 'bg-amber-100 text-amber-700' :
                    'bg-rose-100 text-rose-700'
                  }`}>{a.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
