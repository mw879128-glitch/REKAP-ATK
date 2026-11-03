rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    // Daftar user login aplikasi
    match /artifacts/{appId}/public/data/users/{username} {
      allow read: if request.auth != null;
      allow create, update: if request.auth != null
        && request.resource.data.username is string
        && request.resource.data.pass is string;
      allow delete: if request.auth != null && username != 'admin';
    }

    // Data inputan per user
    match /artifacts/{appId}/users/{username}/{colName}/{docId} {
      allow read, write: if request.auth != null
        && colName in ['master', 'bagian', 'in', 'out', 'so'];
    }

    // Selain itu ditolak
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
