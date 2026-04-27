export default async function TeamDetail({ params }) {
  const { id } = await params; 

  return (
    <main className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
      <div className="s-card" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <h1 style={{ color: '#0D9488' }}>Staff Profile</h1>
        <p style={{ fontSize: '20px', marginTop: '20px' }}>
          ID Karyawan: <strong>{id}</strong>
        </p>
        <div style={{ marginTop: '30px' }}>
          <a href="/" className="btn-p">Kembali ke Home</a>
        </div>
      </div>
    </main>
  );
}