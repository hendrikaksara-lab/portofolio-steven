import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formMsg, setFormMsg] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormMsg('Mohon isi semua kolom.');
      return;
    }
    setFormMsg(`Terima kasih, ${name}! Pesanmu telah tercatat (demo).`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container">
      <header>
        <div className="brand">
          <div className="logo">S</div>
          <div>
            <h1>Steven</h1>
            <div style={{ color: 'var(--muted)', fontSize: '13px' }}>Pelajar • Frontend enthusiast • Pembelajar cepat</div>
          </div>
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="card intro">
            <h2>Halo — saya Steven 👋</h2>
            <p>Saya pelajar yang suka membuat website dan belajar pemrograman. Saya tertarik pada desain antarmuka, React, dan membuat proyek kecil yang berguna.</p>
            <div className="badges">
              <span className="badge">HTML</span>
              <span className="badge">CSS</span>
              <span className="badge">JavaScript</span>
              <span className="badge">React</span>
              <span className="badge">Responsive Design</span>
            </div>

            <div style={{ marginTop: '16px', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <a className="btn" href="#projects">Lihat Proyek</a>
              <a style={{ textDecoration: 'none', color: 'var(--muted)', padding: '10px 12px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.03)' }} href="#contact">Hubungi</a>
            </div>

            <div style={{ marginTop: '14px', color: 'var(--muted)', fontSize: '13px' }}>
              Lokasi: Indonesia • Bahasa: Indonesia, Inggris (dasar)
            </div>
          </div>

          <aside className="card">
            <img src="/img.jpeg" alt="Foto Steven" className="avatar" style={{ objectFit: 'cover' }} />
            <div style={{ marginTop: '12px', color: 'var(--muted)', fontSize: '14px' }}>Ringkasan singkat:
              <div className="note">Saya suka membuat UI sederhana, mempelajari React dan Vite, serta mengerjakan proyek sekolah dan portofolio ini.</div>
            </div>
          </aside>
        </section>

        <section id="about">
          <div className="card">
            <h3>Tentang Saya</h3>
            <p style={{ color: 'var(--muted)' }}>Nama: Steven<br />Umur: 16<br />Pendidikan: Sekolah Tri Ratna<br />Saya tertarik pada pemrograman frontend dan desain. Saya menikmati membangun halaman web responsif dan belajar framework modern seperti React.</p>
          </div>
        </section>

        <section>
          <div className="card">
            <h3>Skills</h3>
            <div className="grid-3" style={{ marginTop: '12px' }}>
              <div className="skill"><strong>HTML & CSS</strong><div className="note">Membuat struktur HTML yang rapi, responsive layout, Flexbox & Grid</div></div>
              <div className="skill"><strong>JavaScript</strong><div className="note">DOM, fetch, basic ES6</div></div>
              <div className="skill"><strong>React</strong><div className="note">Komponen, props, state, hooks dasar</div></div>
            </div>
          </div>
        </section>

        <section id="projects">
          <h3 style={{ marginBottom: '8px' }}>Proyek Pilihan</h3>
          <div className="projects">
            <article className="project card">
              <h4>1) Website Sekolah</h4>
              <p className="note">Website informatif untuk sekolah dengan halaman profil, galeri, dan kontak.</p>
              <p className="note"><strong>Fitur:</strong> Halaman beranda, profil sekolah, informasi kontak, responsive design.</p>
              <p className="note">Teknologi: HTML, CSS, JavaScript</p>
              <a href="./school-website/index.html" className="btn" style={{ marginTop: '10px', display: 'inline-block' }}>Demo</a>
            </article>

            <article className="project card">
              <h4>2) To-do App (React)</h4>
              <p className="note">Aplikasi manajemen tugas sederhana yang membantu pengguna mengorganisir dan melacak tugas harian mereka.</p>
              <p className="note"><strong>Fitur:</strong> Tambah tugas baru, edit tugas, hapus tugas, mark sebagai selesai/belum selesai, penyimpanan otomatis di localStorage, antarmuka yang responsif dan mudah digunakan.</p>
              <p className="note"><strong>Teknologi:</strong> React (hooks: useState, useEffect), Vite, CSS, localStorage API.</p>
              <p className="note"><strong>Fungsi Utama:</strong> State management untuk daftar tugas, CRUD operations, persistence data, UI/UX yang intuitif.</p>
              <a href="./repositories/index.html" className="btn" style={{ marginTop: '10px', display: 'inline-block' }}>Repo</a>
            </article>

            <article className="project card">
              <h4>3) Personal Blog</h4>
              <p className="note">Blog pribadi untuk berbagi artikel tentang pemrograman dan teknologi.</p>
              <p className="note"><strong>Fitur:</strong> Daftar artikel, kategori, pencarian, komentar, responsive layout.</p>
              <p className="note">Teknologi: HTML, CSS, JavaScript, Node.js</p>
              <a href="./personal-blog/index.html" className="btn" style={{ marginTop: '10px', display: 'inline-block' }}>Live</a>
            </article>
          </div>
        </section>

        <section id="contact">
          <div className="card">
            <h3>Kontak</h3>
            <p className="note">Isi form ini atau hubungi langsung ke <strong>082126651824</strong> (WhatsApp/Telepon).</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Nama</label>
              <input id="name" name="name" placeholder="Nama kamu" value={formData.name} onChange={handleInputChange} required />

              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="email@contoh.com" value={formData.email} onChange={handleInputChange} required />

              <label htmlFor="message">Pesan</label>
              <textarea id="message" name="message" rows="4" placeholder="Tulis pesan..." value={formData.message} onChange={handleInputChange} required></textarea>

              <button type="submit" className="btn" style={{ marginTop: '12px' }}>Kirim</button>
              <div className="note">{formMsg}</div>
            </form>
          </div>
        </section>

      </main>

      <footer>
        <div>© {new Date().getFullYear()} Steven — dibuat dengan ❤️</div>
        <div style={{ color: 'var(--muted)' }}>Built with React • Vite</div>
      </footer>
    </div>
  );
}

export default App;