importScripts('https://www.gstatic.com/firebasejs/10.11.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBB_Rn1Gg8Vs-tSSn7wbljAs0lpil59yak",
    authDomain: "dalil-elsouq.firebaseapp.com",
    projectId: "dalil-elsouq",
    storageBucket: "dalil-elsouq.appspot.com",
    messagingSenderId: "613677961296",
    appId: "1:613677961296:web:567921caa30b37a910c155",
    measurementId: "G-HVP7X8LRGM"
})
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('Received background', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});