# REKAP-ATK — Stock ATK DC

Aplikasi monitoring stok ATK berbasis web (satu file `index.html`) dengan **database online (Firebase Firestore)**:

- Data inputan **tersimpan per user** (Master Barang, Master Bagian, In, Out, SO Fisik).
- **Live / realtime**: perubahan di satu perangkat langsung tampil di perangkat lain yang login dengan user yang sama.
- **Bisa dibuka di mana saja** (HP, laptop, PC). Data tidak hilang walau ganti perangkat atau browser.
- **Tahan offline**: kalau internet putus, data disimpan sementara lalu otomatis terkirim saat online.
- Data lama yang dulu hanya tersimpan di browser akan **otomatis diunggah** ke database saat user login pertama kali.

## Struktur File

| File | Fungsi |
|---|---|
| `index.html` | Aplikasi |
| `firebase-config.js` | **Konfigurasi database**. Wajib diisi. |
| `firestore.rules` | Aturan keamanan database |
| `firebase.json` | Konfigurasi opsional untuk Firebase Hosting / CLI |

Struktur data di Firestore:

```
artifacts/{FIREBASE_APP_ID}/public/data/users/{username}        -> akun login (dipakai bersama)
artifacts/{FIREBASE_APP_ID}/users/{username}/master/{plu}
artifacts/{FIREBASE_APP_ID}/users/{username}/bagian/{id}
artifacts/{FIREBASE_APP_ID}/users/{username}/in/{id}
artifacts/{FIREBASE_APP_ID}/users/{username}/out/{id}
artifacts/{FIREBASE_APP_ID}/users/{username}/so/{id}
```

## Setup Database (sekali saja, gratis, ±10 menit)

1. Buka https://console.firebase.google.com lalu klik **Add project** dan buat project baru.
2. **Build → Firestore Database → Create database**. Pilih lokasi `asia-southeast2 (Jakarta)`, lalu mode *production*.
3. **Build → Authentication → Get started → Sign-in method**, lalu aktifkan **Anonymous**.
4. **Firestore Database → Rules**: salin isi file `firestore.rules`, lalu klik **Publish**.
5. **Project settings (ikon ⚙️) → General → Your apps → ikon `</>` (Web)**: daftarkan app, lalu salin objek `firebaseConfig`.
6. Tempel nilainya ke `firebase-config.js` (ganti semua `ISI_...` / `NAMA-PROJECT`).
7. Jika memakai GitHub Pages: **Authentication → Settings → Authorized domains**, lalu tambahkan domain misalnya `mw879128-glitch.github.io`.

## Agar Bisa Dibuka dari Mana Saja

Pilih salah satu cara:

- **GitHub Pages**: commit & push semua file, lalu buka repo dan pilih **Settings → Pages → Deploy from branch `main` / root**.
  Aplikasi bisa diakses di `https://mw879128-glitch.github.io/REKAP-ATK/`.
- **Firebase Hosting**: `npm i -g firebase-tools`, lalu `firebase login`, `firebase use --add`, dan `firebase deploy`.

## Cara Pakai

- Login default: `admin` / `admin123`.
- Tambah user di menu **Master User**. User itu langsung bisa login di perangkat mana pun.
- Indikator di header: **Tersinkron** (sudah aman di database), **Menyimpan...**, **Offline** (menunggu internet), **Lokal** (database belum dikonfigurasi).

> ⚠️ Password user disimpan apa adanya (plain text) di database, sama seperti versi sebelumnya. Jangan pakai password yang sama dengan akun penting lainnya.
