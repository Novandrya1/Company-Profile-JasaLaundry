"use client"
import { createOrder } from "@/app/actions"; // Pastikan path-nya benar
import { useState, useRef } from "react"; // Tambahkan useRef

export default function OrderPage() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null); // Gunakan ref untuk pegang kendali form

  async function handleSubmit(formData) {
    setLoading(true);
    try {
      await createOrder(formData);
      alert("Pesanan Laundry Berhasil Terkirim!");
      
      // Reset form pakai ref, lebih aman di Next.js
      formRef.current?.reset(); 
    } catch (error) {
      alert("Gagal kirim: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container" style={{ padding: '50px 0' }}>
      <div className="s-card" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <h2 style={{ color: '#0D9488', marginBottom: '20px' }}>Pesan Laundry Sekarang</h2>
        
        {/* Tambahkan ref={formRef} di sini */}
        <form ref={formRef} action={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input name="name" placeholder="Nama Lengkap" required style={inputStyle} />
          
          <select name="package" required style={inputStyle}>
             <option value="">Pilih Paket</option>
             <option value="Reguler">Reguler</option>
             <option value="Setrika Uap">Setrika Uap</option>
          </select>
          
          <textarea name="address" placeholder="Alamat Jemput" required style={inputStyle} />
          <input name="whatsapp" placeholder="No. WhatsApp" required style={inputStyle} />
          
          <button type="submit" className="btn-p" disabled={loading}>
            {loading ? "Menyimpan..." : "Kirim Pesanan"}
          </button>
        </form>
      </div>
    </main>
  );
}

const inputStyle = { padding: '10px', borderRadius: '8px', border: '1px solid #ddd' };