/*
 * ================================================================
 *  KONFIGURASI DATABASE ONLINE - Stock ATK DC (Firebase Firestore)
 * ================================================================
 *  Isi nilai di bawah dengan konfigurasi dari Firebase Console:
 *    Project settings  ->  General  ->  Your apps  ->  Web app  ->  SDK setup and configuration (Config)
 *
 *  Selama apiKey masih "ISI_...", aplikasi berjalan dalam MODE LOKAL
 *  (data hanya tersimpan di browser perangkat itu saja).
 *
 *  Catatan: nilai config Firebase Web memang bersifat publik (aman ditaruh di GitHub).
 *  Keamanan data diatur oleh file firestore.rules.
 *  Panduan lengkap: lihat README.md
 */
window.FIREBASE_CONFIG = {
    apiKey: "ISI_API_KEY_ANDA",
    authDomain: "NAMA-PROJECT.firebaseapp.com",
    projectId: "NAMA-PROJECT",
    storageBucket: "NAMA-PROJECT.appspot.com",
    messagingSenderId: "000000000000",
    appId: "1:000000000000:web:xxxxxxxxxxxxxxxx"
};

// Nama ruang data aplikasi di database (jangan diubah setelah dipakai, agar data lama tetap terbaca)
window.FIREBASE_APP_ID = "rekap-atk-dc";

