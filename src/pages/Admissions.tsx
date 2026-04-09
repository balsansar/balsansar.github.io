import { useState } from 'react';
import { CheckCircle, FileText, Download, Send, ChevronRight, AlertCircle } from 'lucide-react';

const steps = [
  { num: '01', title: 'Collect Application Form', desc: 'Visit the school office or download the admission form from our website. Forms are also available at the school gate during office hours.' },
  { num: '02', title: 'Submit Documents', desc: 'Fill the form completely and submit it along with all required documents to the school office.' },
  { num: '03', title: 'Entrance Assessment', desc: 'Students applying for Grade 1 and above will appear for a brief entrance assessment to determine the appropriate level.' },
  { num: '04', title: 'Interview & Parent Meeting', desc: 'A brief meeting with the Principal and parents/guardians to discuss the student\'s needs and school expectations.' },
  { num: '05', title: 'Admission Confirmation', desc: 'Receive your admission confirmation letter. Pay the required fees to complete the enrollment process.' },
  { num: '06', title: 'Orientation Day', desc: 'Attend the orientation session to learn about school rules, schedule, and get familiar with the campus.' },
];

const documents = [
  'Birth certificate (original + photocopy)',
  'Transfer certificate from previous school (if applicable)',
  'Character certificate from previous school',
  'Passport-size photographs (4 copies)',
  'Citizenship/voter ID copy of parent/guardian',
  'Previous year\'s report card / mark sheet',
  'Medical fitness certificate (for Playgroup/Nursery)',
];

const feeStructure = [
  { level: 'Playgroup / Nursery / KG', admission: '3,000', monthly: '1,200', annual: '2,500' },
  { level: 'Grade 1 – 3', admission: '4,000', monthly: '1,400', annual: '3,000' },
  { level: 'Grade 4 – 5', admission: '4,500', monthly: '1,600', annual: '3,000' },
  { level: 'Grade 6 – 8', admission: '5,000', monthly: '1,800', annual: '3,500' },
  { level: 'Grade 9 – 10', admission: '6,000', monthly: '2,200', annual: '4,000' },
];

export default function Admissions() {
  const [formData, setFormData] = useState({
    studentName: '', dob: '', grade: '', parentName: '', phone: '', email: '', address: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-green-800 to-green-600 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Admissions 2081 BS</h1>
          <p className="text-green-100">Admissions are now open. Join our growing family of learners.</p>
        </div>
      </div>

      {/* Admission Notice Banner */}
      <div className="bg-amber-50 border-b border-amber-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <AlertCircle size={18} className="text-amber-600 flex-shrink-0" />
          <p className="text-amber-800 text-sm"><strong>Important:</strong> Admissions for Academic Year 2081 BS are now open. Last date to apply: Ashadh 30, 2081. Limited seats available.</p>
        </div>
      </div>

      {/* Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Process</div>
            <h2 className="text-3xl font-bold text-gray-900">Admission Process</h2>
            <p className="text-gray-500 mt-2">Simple, straightforward steps to join our academy</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-gray-50 rounded-xl p-6 border border-gray-100 relative overflow-hidden">
                <div className="text-6xl font-black text-gray-100 absolute top-2 right-4 leading-none">{step.num}</div>
                <div className="relative">
                  <div className="bg-green-600 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center mb-4">{step.num}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Requirements</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Eligibility Criteria</h2>
              <div className="space-y-3">
                {[
                  { grade: 'Playgroup', age: 'Minimum 2.5 years of age' },
                  { grade: 'Nursery (LKG)', age: 'Minimum 3.5 years of age' },
                  { grade: 'Kindergarten (UKG)', age: 'Minimum 4.5 years of age' },
                  { grade: 'Grade 1', age: 'Minimum 5 years, completion of KG preferred' },
                  { grade: 'Grade 2 onwards', age: 'Passed previous grade, entrance assessment required' },
                  { grade: 'Grade 9', age: 'Minimum 50% in Grade 8, interview required' },
                ].map((item) => (
                  <div key={item.grade} className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-100">
                    <ChevronRight size={16} className="text-green-500 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900 text-sm">{item.grade}: </span>
                      <span className="text-gray-600 text-sm">{item.age}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Documents</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
              <div className="space-y-2 mb-6">
                {documents.map((doc) => (
                  <div key={doc} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                    <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{doc}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition">
                  <Download size={15} /> Download Admission Form
                </a>
                <a href="#" className="flex items-center gap-2 border border-blue-700 text-blue-700 hover:bg-blue-50 text-sm font-semibold px-4 py-2.5 rounded-lg transition">
                  <FileText size={15} /> Fee Structure PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Fees</div>
            <h2 className="text-3xl font-bold text-gray-900">Fee Structure 2081 BS</h2>
            <p className="text-gray-500 mt-2">All amounts in Nepalese Rupees (NPR)</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-800 text-white">
                  <th className="text-left px-6 py-4 rounded-tl-xl">Level / Grade</th>
                  <th className="text-center px-6 py-4">Admission Fee</th>
                  <th className="text-center px-6 py-4">Monthly Fee</th>
                  <th className="text-center px-6 py-4 rounded-tr-xl">Annual Fee</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((row, i) => (
                  <tr key={row.level} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.level}</td>
                    <td className="px-6 py-4 text-center text-gray-700">Rs. {row.admission}/-</td>
                    <td className="px-6 py-4 text-center text-gray-700">Rs. {row.monthly}/-</td>
                    <td className="px-6 py-4 text-center text-gray-700">Rs. {row.annual}/-</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3">* Fee structure is subject to revision. Contact the school office for the most current information. Scholarships available for meritorious students.</p>
        </div>
      </section>

      {/* Online Form */}
      <section className="py-16 bg-gray-50" id="apply">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Apply Online</div>
            <h2 className="text-3xl font-bold text-gray-900">Online Admission Enquiry</h2>
            <p className="text-gray-500 mt-2">Submit your enquiry and we will contact you within 24 hours</p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
              <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Application Received!</h3>
              <p className="text-gray-600">Thank you for your interest in Bal Sansar Academy. Our admissions team will contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Student's Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter student's name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Date of Birth *</label>
                  <input
                    type="date"
                    required
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Applying for Grade *</label>
                  <select
                    required
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Grade</option>
                    {['Playgroup', 'Nursery (LKG)', 'KG (UKG)', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'].map(g => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Parent/Guardian Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Father/Mother's name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+977-XXXXXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Current Address *</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Village/Ward, Dang, Nepal"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Any special requirements or questions..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
              >
                <Send size={16} /> Submit Enquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
