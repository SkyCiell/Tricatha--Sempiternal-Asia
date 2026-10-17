# 📸 Panduan Folder Foto Final TSA (Tricatha Sempiternal Asia)

Folder ini (`public/final-photos/`) disiapkan khusus untuk menampung seluruh aset foto final resolusi tinggi yang siap digunakan di website TSA. Karena berada di dalam direktori `public/`, semua foto di sini **dapat langsung diakses oleh browser** menggunakan URL relatif `/final-photos/...`.

---

## 📁 Struktur Direktori & Kegunaan

```text
public/final-photos/
├── events/                          # Foto dokumentasi resmi event TSA
│   ├── appmbgi-national-summit-2026/
│   ├── team-building-bp-tapera-2025/
│   ├── capacity-building-bp-tapera-2025/
│   ├── adobe-ai-art-revolution/
│   ├── thales-kadin-innovation-day/
│   ├── indonesia-europe-investment-summit-2023/
│   ├── illuminate-asia-exclusive-evening/
│   ├── empowering-women-in-politics/
│   └── book-launching-restorative-justice/
│
├── brands/                          # Foto pilar bisnis & unit usaha TSA
│   ├── gov-adv/                     # Government Advocacy & Sovereign Relations
│   ├── technology/                  # TSA IT, Digital Governance & Command Center
│   ├── enchante/                    # Enchantée Kitchen (Culinary & Banquets)
│   ├── gwi/                         # Global Wave Indonesia (MICE & Summits)
│   └── dna-studio/                  # DNA Studio Broadcast & Podcasts
│
├── team/                            # Foto jajaran direksi, komisaris & personil TSA
├── hero/                            # Banner utama, background hero & poster video
└── general/                         # Foto editorial umum (About, Contact, Careers, dll)
```

---

## 🏷️ Standar Penamaan File Foto

### 1. Kategori Event (`public/final-photos/events/<nama-event>/`)
Untuk setiap subfolder event:
- **`cover.jpg`**: Foto utama / thumbnail card event (Rasio 16:9 atau 4:3, landscape).
- **`photo-1.jpg`, `photo-2.jpg`, `photo-3.jpg`, dst.**: Foto dokumentasi galeri detail event.
- *Format yang didukung*: `.jpg`, `.jpeg`, `.png`, `.webp`.

> **Catatan Event:** Website saat ini membaca rute `/events/<slug>/...` melalui `public/events/`. Anda juga dapat menduplikasi atau menaruh foto event ke folder `public/events/` agar langsung tampil otomatis pada halaman detail event.

### 2. Kategori Brands (`public/final-photos/brands/<nama-brand>/`)
- **`cover.jpg`** atau **`hero.jpg`**: Foto banner utama halaman brand.
- **`feature-1.jpg`, `feature-2.jpg`**: Foto showcase aktivitas atau produk.

### 3. Kategori Team (`public/final-photos/team/`)
- Gunakan penamaan berbasis nama pejabat/personil dengan format kebab-case:
  - Contoh: `dina-e-saksono.png`, `raditya-pratama.png`, `joseph-saryuf.png`, `r-januardy.png`.
  - Disarankan rasio 1:1 (square portrait) dengan background transparan (PNG) atau solid elegan.

### 4. Kategori Hero & General (`public/final-photos/hero/` & `general/`)
- Beri nama deskriptif ringkas:
  - Contoh: `hero-bg-poster.jpg`, `office-the-city-tower.jpg`, `conclave-discussion.jpg`.

---

## 🚀 Cara Memanggil Foto di Komponen React / Halaman

Karena berada di `public/`, Anda tidak perlu melakukan `import` di JavaScript. Cukup gunakan string path langsung:

```jsx
// Contoh pemanggilan di file JSX:
<img 
  src="/final-photos/brands/technology/cover.jpg" 
  alt="TSA Technology Operation" 
  className="w-full h-full object-cover"
/>
```

---

## 💡 Rekomendasi Optimasi Gambar
1. **Resolusi**:
   - Foto Hero / Fullscreen: Maksimal lebar `1920px` - `2560px`.
   - Foto Card / Gallery: Lebar `800px` - `1200px`.
2. **Ukuran File**: Usahakan di bawah `500 KB` per foto (bisa dikompres via TinyPNG / Squoosh) agar loading website tetap super cepat dan mulus.
3. **Format**: Gunakan `.webp` atau `.jpg` berkualitas 80-85% untuk performa terbaik.
