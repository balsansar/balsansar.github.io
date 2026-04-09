import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ['All', 'Classrooms', 'Events', 'Sports', 'Cultural', 'Facilities'];

const photos = [
  { id: 1, cat: 'Classrooms', title: 'Modern Classroom Setup', img: 'https://images.pexels.com/photos/8613042/pexels-photo-8613042.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 2, cat: 'Events', title: 'Annual Prize Distribution', img: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 3, cat: 'Sports', title: 'Annual Sports Day', img: 'https://images.pexels.com/photos/8613318/pexels-photo-8613318.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 4, cat: 'Cultural', title: 'Cultural Program 2080', img: 'https://images.pexels.com/photos/8613172/pexels-photo-8613172.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 5, cat: 'Classrooms', title: 'Science Lab Session', img: 'https://images.pexels.com/photos/8612927/pexels-photo-8612927.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 6, cat: 'Events', title: 'Republic Day Celebration', img: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 7, cat: 'Sports', title: 'Cricket Tournament', img: 'https://images.pexels.com/photos/8617843/pexels-photo-8617843.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 8, cat: 'Cultural', title: 'Saraswati Puja 2080', img: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 9, cat: 'Facilities', title: 'School Library', img: 'https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 10, cat: 'Events', title: 'Science Exhibition 2080', img: 'https://images.pexels.com/photos/8613042/pexels-photo-8613042.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 11, cat: 'Facilities', title: 'Computer Laboratory', img: 'https://images.pexels.com/photos/8617681/pexels-photo-8617681.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 12, cat: 'Sports', title: 'Football Field', img: 'https://images.pexels.com/photos/8613318/pexels-photo-8613318.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = photos.filter((p) => filter === 'All' || p.cat === filter);

  const prevPhoto = () => {
    if (lightbox === null) return;
    const idx = filtered.findIndex(p => p.id === lightbox);
    if (idx > 0) setLightbox(filtered[idx - 1].id);
  };

  const nextPhoto = () => {
    if (lightbox === null) return;
    const idx = filtered.findIndex(p => p.id === lightbox);
    if (idx < filtered.length - 1) setLightbox(filtered[idx + 1].id);
  };

  const currentPhoto = filtered.find(p => p.id === lightbox);

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Photo Gallery</h1>
          <p className="text-blue-100">Moments from our classrooms, events, sports, and school life</p>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  filter === cat
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((photo) => (
              <div
                key={photo.id}
                className="relative group cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
                onClick={() => setLightbox(photo.id)}
              >
                <img
                  src={photo.img}
                  alt={photo.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-sm font-medium">{photo.title}</p>
                    <span className="text-gray-300 text-xs">{photo.cat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center text-gray-500 py-16">No photos in this category.</div>
          )}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Videos</div>
            <h2 className="text-3xl font-bold text-gray-900">School Video Gallery</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'School Overview 2080', duration: '3:45', thumb: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600' },
              { title: 'Annual Sports Day Highlights', duration: '5:20', thumb: 'https://images.pexels.com/photos/8613318/pexels-photo-8613318.jpeg?auto=compress&cs=tinysrgb&w=600' },
              { title: 'Cultural Program 2080', duration: '8:15', thumb: 'https://images.pexels.com/photos/8613172/pexels-photo-8613172.jpeg?auto=compress&cs=tinysrgb&w=600' },
            ].map((video) => (
              <div key={video.title} className="rounded-xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer">
                <div className="relative">
                  <img src={video.thumb} alt={video.title} className="w-full h-44 object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[16px] border-t-transparent border-b-transparent border-l-blue-700 ml-1" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">{video.duration}</span>
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-gray-900">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && currentPhoto && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-gray-300 transition" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition p-2" onClick={(e) => { e.stopPropagation(); prevPhoto(); }}>
            <ChevronLeft size={40} />
          </button>
          <div onClick={(e) => e.stopPropagation()}>
            <img src={currentPhoto.img} alt={currentPhoto.title} className="max-h-[80vh] max-w-[90vw] rounded-xl object-contain" />
            <p className="text-white text-center mt-3 font-medium">{currentPhoto.title}</p>
            <p className="text-gray-400 text-center text-sm">{currentPhoto.cat}</p>
          </div>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition p-2" onClick={(e) => { e.stopPropagation(); nextPhoto(); }}>
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
}
