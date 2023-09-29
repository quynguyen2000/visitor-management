/* global importScripts, firebase */
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyDIevjHLvqxdANgI6K3AyF5pmfDHkBjDTo',
  authDomain: 'demoapp-2cca8.firebaseapp.com',
  projectId: 'demoapp-2cca8',
  storageBucket: 'demoapp-2cca8.appspot.com',
  messagingSenderId: '82713275574',
  appId: '1:82713275574:web:b36cc470a799aa14898a17',
  measurementId: 'G-FSNG1CXWT3',
});

class CustomPushEvent extends Event {
  constructor(data) {
    super('push');

    Object.assign(this, data);
    this.custom = true;
  }
}

self.addEventListener('push', (e) => {
  if (e.custom) return;

  const oldData = e.data;

  const newEvent = new CustomPushEvent({
    data: {
      ehheh: oldData.json(),
      json() {
        const newData = oldData.json();
        newData.data = {
          ...newData.data,
          ...newData.notification,
        };
        delete newData.notification;
        return newData;
      },
    },
    waitUntil: e.waitUntil.bind(e),
  });

  e.stopImmediatePropagation();

  dispatchEvent(newEvent);
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body, icon, ...restPayload } = payload.data;

  const notificationOptions = {
    body,
    icon: icon || '/icons/firebase-logo.png',
    data: restPayload,
  };

  return self.registration.showNotification(title, notificationOptions);
});

self.addEventListener('notificationclick', (event) => {
  if (event.notification.data && event.notification.data.click_action) {
    self.clients.openWindow(event.notification.data.click_action);
  } else {
    self.clients.openWindow(origin + '/notifications');
  }

  event.notification.close();
});
