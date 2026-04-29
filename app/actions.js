"use server"
import { createClient } from "@supabase/supabase-js";

// Langsung inisialisasi tanpa pengecekan null agar error terlihat jelas jika URL salah
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function createOrder(formData) {
  // Ambil data dan pastikan diconvert ke String
  const name = String(formData.get("name"));
  const pack = String(formData.get("package"));
  const address = String(formData.get("address"));
  const whatsapp = String(formData.get("whatsapp"));

  // Log untuk debugging di terminal VS Code Abang
  console.log("Mencoba kirim data:", { name, pack, address, whatsapp });

  const { data, error } = await supabase
    .from("orders")
    .insert([
      { 
        Name: name,      
        Package: pack,   
        address: address, 
        Whatsapp: whatsapp 
      }
    ])
    .select(); // Tambahkan .select() agar kita tahu data apa yang berhasil masuk

  if (error) {
    // Pesan error ini akan muncul di TERMINAL VS CODE Abang
    console.error("DETAIL ERROR SUPABASE:", error.message);
    throw new Error(error.message); 
  }
  
  console.log("Berhasil simpan:", data);
  return { success: true };
}