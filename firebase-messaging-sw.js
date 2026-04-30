// firebase-messaging-sw.js
// Ce fichier DOIT être à la racine du site (même dossier que index.html)

importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey:            "AIzaSyA1GO1UuBb8B8bMPRMCI2ulRUq04NsZIt4",
  authDomain:        "budget-family-127fe.firebaseapp.com",
  databaseURL:       "https://budget-family-127fe-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "budget-family-127fe",
  storageBucket:     "budget-family-127fe.firebasestorage.app",
  messagingSenderId: "542200318151",
  appId:             "1:542200318151:web:dc29fc9c9fb8392be0d6e2"
});

const messaging = firebase.messaging();

// Notification reçue quand l'appli est en arrière-plan ou téléphone verrouillé
messaging.onBackgroundMessage(payload => {
  const { title, body } = payload.notification;
  self.registration.showNotification(title || '💙 Budget Famille', {
    body: body || '',
    icon: '/icon.png',
    badge: '/icon.png',
    vibrate: [200, 100, 200],
    data: payload.data
  });
});
