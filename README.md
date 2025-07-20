# MyAnimeList-Jikan

[![npm version](https://badge.fury.io/js/myanimelist-jikan.svg)](https://badge.fury.io/js/myanimelist-jikan)
[![MIT License](https://img.shields.io/npm/l/myanimelist-jikan)](https://github.com/USERNAME/myanimelist-jikan/blob/main/LICENSE)
[![Made by tamaaxzcw](https://img.shields.io/badge/made%20by-tamaaxzcw-blue.svg)](https://github.com/tamaaxzcw)

Wrapper Node.js yang kaya fitur, intuitif, dan tangguh untuk **Jikan.moe v4 API**.

Dibuat dengan ❤️ oleh **tamaaxzcw**.

Library ini menyediakan antarmuka yang bersih dan modern untuk berinteraksi dengan setiap endpoint dari Jikan API v4. Didesain untuk menjadi kuat, menangani masalah umum seperti *rate limiting* secara otomatis, dan memberikan pengalaman terbaik bagi developer.

---

## ✨ Fitur Utama

* ✅ **Cakupan Penuh Jikan API v4**: Akses data anime, manga, karakter, orang, klub, jadwal, dan banyak lagi.
* 🧠 **Cerdas & Sederhana**: API modern berbasis `async/await` yang mudah digunakan.
* 🛡️ **Penanganan Error yang Kuat**: Memberikan pesan error yang jelas untuk masalah API dan validasi.
* ⚙️ **Manajemen *Rate Limit* Otomatis**: Secara otomatis menunggu dan mencoba kembali saat terkena *rate limit* dari Jikan.
* 🚀 **Tanpa Dependensi**: Ringan, cepat, dan tidak membebani proyekmu.

---

## 📥 Instalasi

Gunakan npm untuk menginstal paket ini:

```bash
npm install myanimelist-jikan
```

---

## 🚀 Contoh Cepat

Impor klien dan mulailah membuat permintaan dengan mudah.

```javascript
import jikan, { JikanEnums } from 'myanimelist-jikan';

// --- Contoh 1: Mendapatkan detail lengkap untuk anime "Frieren" (ID: 52991) ---
async function getFrierenDetails() {
  try {
    const response = await jikan.anime.getById(52991);
    const frieren = response.data;
    
    console.log(`Judul: ${frieren.title_english}`);
    console.log(`Skor: ${frieren.score} ⭐`);
    console.log(`Sinopsis: ${frieren.synopsis.substring(0, 150)}...`);

  } catch (error) {
    console.error("Oops, terjadi kesalahan:", error.message);
  }
}

getFrierenDetails();


// --- Contoh 2: Mencari manga dengan parameter ---
async function searchManga() {
    try {
        const params = {
            q: 'One Piece',
            sfw: true,
            limit: 5,
            order_by: JikanEnums.OrderBy.MEMBERS,
            sort: JikanEnums.SortOrder.DESC
        };

        const response = await jikan.manga.search(params);
        console.log('\n--- Hasil Pencarian Manga ---');
        response.data.forEach(manga => {
            console.log(`- ${manga.title} (Anggota: ${manga.members.toLocaleString()})`);
        });

    } catch(error) {
        console.error(error);
    }
}

searchManga();
```

---

## 📚 Dokumentasi API

Struktur wrapper ini sengaja dibuat untuk mencerminkan struktur Jikan API agar mudah dipahami.

* `jikan.anime`
* `jikan.manga`
* `jikan.characters`
* `jikan.people`
* `jikan.clubs`
* `jikan.genres`
* `jikan.magazines`
* `jikan.producers`
* `jikan.seasons`
* `jikan.top`
* `jikan.schedules`

Setiap klien memiliki metode umum seperti `getById(id)`, `search(params)`, dan metode spesifik lainnya. Untuk daftar lengkap parameter pencarian dan struktur respons, silakan merujuk ke [Dokumentasi Resmi Jikan API](https://docs.api.jikan.moe/).

### Contoh Lainnya

#### Mendapatkan Anime yang Sedang Tayang Musim Ini

```javascript
import jikan from 'myanimelist-jikan';

async function getCurrentSeason() {
    const nowAiring = await jikan.seasons.getNow();
    console.log('--- Anime yang Sedang Tayang Musim Ini ---');
    nowAiring.data.forEach(anime => console.log(`- ${anime.title}`));
}

getCurrentSeason();
```

#### Mendapatkan Top Anime Berdasarkan Popularitas

```javascript
import jikan from 'myanimelist-jikan';

async function getTopAnime() {
    const topAnime = await jikan.top.search({ type: 'anime', filter: 'bypopularity', limit: 5 });
    console.log('\n--- Top 5 Anime Terpopuler ---');
    topAnime.data.forEach(anime => {
        console.log(`#${anime.rank} - ${anime.title} (Skor: ${anime.score})`);
    });
}

getTopAnime();
```

---

## 🤝 Berkontribusi

Kontribusi, isu, dan permintaan fitur sangat kami harapkan! Jangan ragu untuk memeriksa [halaman isu](https://github.com/tamaaxzcw/myanimelist-jikan/issues).

---

## 👤 Penulis

**tamaaxzcw**

* GitHub: [@tamaaxzcw](https://github.com/tamaaxzcw)

---

## 📜 Lisensi

Proyek ini dilisensikan di bawah [Lisensi MIT](https://github.com/tamaaxzcw/myanimelist-jikan/blob/main/LICENSE).
