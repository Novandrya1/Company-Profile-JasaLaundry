import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'JasaLaundry.ID | Solusi Cuci Digital',
  description: 'Startup laundry terbaik untuk kebutuhan harian Anda',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
<header className="navbar">
  <div className="container">
    <Link href="/" className="logo">Jasa<span>Laundry</span></Link>
    
    <nav className="nav-menu">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/team/staff-01">Team</Link>
      <Link href="/contact" className="btn-cta">Contact</Link>
    </nav>
  </div>
</header>

        {children}

        <footer>
          <div className="container">
            <h3>Jasa<span>Laundry</span></h3>
            <p style={{marginTop: '10px', opacity: 0.7}}>&copy; 2026 JasaLaundry.ID</p>
          </div>
        </footer>
      </body>
    </html>
  )
}