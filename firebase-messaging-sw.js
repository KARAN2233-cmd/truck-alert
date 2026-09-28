importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
importScripts('config.js');

firebase.initializeApp(self.APP_CONFIG.firebase);
firebase.messaging();   // shows the alert automatically when the phone receives it
