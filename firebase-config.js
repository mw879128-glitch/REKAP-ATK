/*
 * ================================================================
 *  KONFIGURASI DATABASE ONLINE - Stock ATK DC (Firebase Firestore)
 * ================================================================
 *  PERHATIAN:
 *  File ini KHUSUS untuk data konfigurasi Web App Firebase (JavaScript).
 *  Bukan tempat untuk 'rules_version' / aturan keamanan!
 *  (Aturan keamanan sudah ada di file terpisah: firestore.rules)
 *
 *  CARA MENDAPATKAN CONFIG INI:
 *  1. Buka console.firebase.google.com -> Buka project Anda
 *  2. Klik ikon Gerigi (⚙️ Project settings) di kiri atas
 *  3. Scroll ke bawah ke bagian "Your apps"
 *  4. Pilih Web App Anda (ikon </>)
 *  5. Pada pilihan "SDK setup and configuration", klik opsi "Config"
 *  6. Salin nilai apiKey, authDomain, projectId, dst. ke bawah ini:
 * ================================================================
 */

window.FIREBASE_CONFIG = {
    apiKey: "ISI_API_KEY_ANDA",
    authDomain: "NAMA-PROJECT.firebaseapp.com",
    projectId: "NAMA-PROJECT",
    storageBucket: "NAMA-PROJECT.appspot.com",
    messagingSenderId: "000000000000",
    appId: "1:000000000000:web:xxxxxxxxxxxxxxxx"
};

// Nama ruang data aplikasi di database (tetap seperti ini)
window.FIREBASE_APP_ID = "rekap-atk-dc";
