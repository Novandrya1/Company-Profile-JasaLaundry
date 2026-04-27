import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section style={{padding: '100px 0', background: 'radial-gradient(circle at top right, #f0fdfa, #fff)'}}>
        <div className="container" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center'}}>
          <div>
            <span style={{color: '#0D9488', fontWeight: 'bold', letterSpacing: '1px'}}>#1 LAUNDRY APP IN GRESIK</span>
            <h1 style={{fontSize: '56px', fontWeight: '800', lineHeight: '1.1', margin: '20px 0'}}>Cuci Baju Jadi <span>Lebih Mudah</span></h1>
            <p style={{fontSize: '18px', color: '#64748b', marginBottom: '40px'}}>Lupakan tumpukan cucian. Biar kami yang ambil, cuci, dan antar kembali ke depan pintu Anda.</p>
            <div style={{display: 'flex', gap: '15px'}}>
              <Link href="/services" className="btn-p">Lihat Paket</Link>
              <Link href="/about" className="btn-secondary">Pelajari Lebih Lanjut</Link>
            </div>
          </div>
          <div style={{background: 'white', padding: '15px', borderRadius: '30px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)'}}>
            <img src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=1000" alt="Laundry" style={{width: '100%', borderRadius: '20px'}} />
          </div>
        </div>
      </section>

      {/* FITUR UNGGULAN */}
      <section style={{padding: '100px 0'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <h2 style={{fontSize: '36px', fontWeight: '800'}}>Fitur Unggulan Kami</h2>
            <p style={{color: '#64748b'}}>Kenapa ribuan pelanggan memilih E-Laundry?</p>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
            <div className="s-card">
              <div className="s-icon">⏱️</div>
              <h3>Ekspres 6 Jam</h3>
              <p>Butuh cepat? Kami sediakan layanan kilat selesai di hari yang sama.</p>
            </div>
            <div className="s-card">
              <div className="s-icon">🚚</div>
              <h3>Gratis Antar Jemput</h3>
              <p>Khusus wilayah Gresik dan sekitarnya, kami jemput cucian tanpa biaya tambahan.</p>
            </div>
            <div className="s-card">
              <div className="s-icon">🛡️</div>
              <h3>Asuransi Pakaian</h3>
              <p>Setiap helai pakaian Anda dilindungi asuransi jika terjadi kerusakan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PAKET LAYANAN */}
      <section style={{padding: '100px 0', background: '#f8fafc'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <h2 style={{fontSize: '36px', fontWeight: '800'}}>Paket Layanan</h2>
            <p style={{color: '#64748b'}}>Harga transparan, hasil maksimal</p>
          </div>
          <div style={{display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap'}}>
            {/* Paket Reguler */}
            <div style={{background: 'white', padding: '40px', borderRadius: '24px', width: '320px', border: '1px solid #e2e8f0'}}>
              <h3>Reguler</h3>
              <div style={{fontSize: '32px', fontWeight: '800', margin: '20px 0'}}>Rp 8.000 <span style={{fontSize: '16px', fontWeight: '400', color: '#64748b'}}>/kg</span></div>
              <ul style={{listStyle: 'none', color: '#64748b', marginBottom: '30px'}}>
                <li style={{marginBottom: '10px'}}>✅ Cuci & Lipat</li>
                <li style={{marginBottom: '10px'}}>✅ Estimasi 2 Hari</li>
                <li>✅ Wangi Premium</li>
              </ul>
              <Link href="/contact" className="btn-secondary" style={{width: '100%', textAlign: 'center'}}>Pilih Paket</Link>
            </div>

            {/* Paket Best Seller */}
            <div style={{background: 'white', padding: '40px', borderRadius: '24px', width: '320px', border: '2px solid #0D9488', position: 'relative'}}>
              <div style={{position: 'absolute', top: '-15px', right: '20px', background: '#f97316', color: 'white', padding: '4px 15px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold'}}>TERLARIS</div>
              <h3>Setrika Uap</h3>
              <div style={{fontSize: '32px', fontWeight: '800', margin: '20px 0'}}>Rp 12.000 <span style={{fontSize: '16px', fontWeight: '400', color: '#64748b'}}>/kg</span></div>
              <ul style={{listStyle: 'none', color: '#64748b', marginBottom: '30px'}}>
                <li style={{marginBottom: '10px'}}>✅ Cuci + Setrika Uap</li>
                <li style={{marginBottom: '10px'}}>✅ Estimasi 1 Hari</li>
                <li>✅ Antar Jemput Gratis</li>
              </ul>
              <Link href="/contact" className="btn-p" style={{width: '100%', textAlign: 'center'}}>Pilih Paket</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}