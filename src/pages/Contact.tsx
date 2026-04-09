import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Facebook, Youtube } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-blue-100">We're here to help. Reach out to us anytime.</p>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Get in Touch</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Whether you have questions about admissions, academics, or any other matter, our friendly team is ready to assist you.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-blue-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">School Address</div>
                    <div className="text-gray-600 text-sm">Gadhawa-6, Dang</div>
                    <div className="text-gray-600 text-sm">Lumbini Province, Nepal</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-green-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">Phone Numbers</div>
                    <div className="text-gray-600 text-sm">Office: +977-082-XXXXXX</div>
                    <div className="text-gray-600 text-sm">Mobile: +977-9XXXXXXXXX</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-amber-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">Email Address</div>
                    <div className="text-gray-600 text-sm">info@balsansaracademy.edu.np</div>
                    <div className="text-gray-600 text-sm">admissions@balsansaracademy.edu.np</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-rose-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">Office Hours</div>
                    <div className="text-gray-600 text-sm">Sunday – Friday: 9:30 AM – 4:30 PM</div>
                    <div className="text-gray-600 text-sm">Saturday: Closed</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <div className="font-semibold text-gray-900 text-sm mb-3">Follow Us</div>
                <div className="flex gap-3">
                  <a href="#" className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg transition">
                    <Facebook size={15} /> Facebook
                  </a>
                  <a href="#" className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-sm px-4 py-2 rounded-lg transition">
                    <Youtube size={15} /> YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

                {submitted ? (
                  <div className="text-center py-10">
                    <CheckCircle size={52} className="text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h4>
                    <p className="text-gray-600">Thank you for contacting us. We will respond within 24 hours.</p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                      className="mt-4 text-blue-700 font-semibold hover:text-blue-600 transition"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="+977-XXXXXXXXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject *</label>
                        <select
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select subject</option>
                          <option>Admission Enquiry</option>
                          <option>Fee Information</option>
                          <option>Academic Query</option>
                          <option>Transfer Certificate</option>
                          <option>General Enquiry</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        placeholder="Write your message here..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-700 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
                    >
                      <Send size={16} /> Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Google Map Embed */}
              <div className="mt-6 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14168.25!2d82.2!3d28.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDAwJzAwLjAiTiA4MsKwMTInMDAuMCJF!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bal Sansar Academy Location - Gadhawa-6, Dang, Nepal"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
