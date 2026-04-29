import Link from "next/link";

export default function StaffProfile() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        
        <Link href="/" style={styles.backBtn}>
          ← Kembali ke Beranda
        </Link>

        <div style={styles.card}>
          {/* Bagian Foto */}
          <div style={styles.imageSection}>
            <div style={styles.avatarCircle}>
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Novan" 
                alt="Staff Profile"
                style={styles.img}
              />
            </div>
          </div>

          {/* Bagian Detail */}
          <div style={styles.contentSection}>
            <span style={styles.badge}>Senior Specialist</span>
            <h1 style={styles.name}>Novandrya Ramadhan</h1>
            <p style={styles.tagline}>"Expert in Fabric Care & Customer Satisfaction"</p>
            
            <div style={styles.divider}></div>

            <div style={styles.grid}>
              <div>
                <h3 style={styles.label}>Spesialisasi</h3>
                <p style={styles.info}>Dry Cleaning & Premium Treatment</p>
              </div>
              <div>
                <h3 style={styles.label}>Pengalaman</h3>
                <p style={styles.info}>3+ Tahun di Industri IT</p>
              </div>
            </div>

            <div style={styles.bioSection}>
              <h3 style={styles.label}>Tentang Saya</h3>
              <p style={styles.bioText}>
                Berdedikasi tinggi dalam memastikan setiap helai pakaian pelanggan mendapatkan perlakuan terbaik. Ahli dalam menangani berbagai jenis bahan kain dengan teknik pembersihan modern agar serat kain tetap terjaga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    padding: '50px 20px',
    fontFamily: 'sans-serif'
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto'
  },
  backBtn: {
    color: '#0d9488',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'block',
    marginBottom: '20px'
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    border: '1px solid #f1f5f9'
  },
  imageSection: {
    flex: '1 1 300px',
    backgroundColor: '#0d9488',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px'
  },
  avatarCircle: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    border: '4px solid rgba(255,255,255,0.3)',
    overflow: 'hidden',
    backgroundColor: '#fff'
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  contentSection: {
    flex: '2 1 400px',
    padding: '40px'
  },
  badge: {
    backgroundColor: '#ccfbf1',
    color: '#0f766e',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  name: {
    fontSize: '32px',
    color: '#1e293b',
    margin: '10px 0 5px 0',
    fontWeight: '800'
  },
  tagline: {
    color: '#0d9488',
    fontStyle: 'italic',
    marginBottom: '20px'
  },
  divider: {
    height: '1px',
    backgroundColor: '#f1f5f9',
    marginBottom: '20px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
    marginBottom: '30px'
  },
  label: {
    fontSize: '11px',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: 'bold',
    marginBottom: '5px'
  },
  info: {
    color: '#334155',
    fontWeight: '600'
  },
  bioSection: {
    borderTop: '1px solid #f1f5f9',
    paddingTop: '20px'
  },
  bioText: {
    color: '#64748b',
    lineHeight: '1.6'
  }
};