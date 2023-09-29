import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { TypeFireBaseConfig } from './interfaces';

const firebaseConfig: TypeFireBaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const requestPermission = () => {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      getToken(messaging, {
        vapidKey:
          'BKVqAFBp3_HYDAgtNzsCjX2uUIesRIG6sT5sA7KtequMI_yKL53a0Ozh1ON06xgit0D4DZ0nSVbW-ZpLeUw0OnA',
      })
        .then((currentToken) => {
          if (currentToken) {
            localStorage.setItem('fcm-token', currentToken);
          } else {
            console.log('Failed to generate the app registration token.');
          }
        })
        .catch((err) => {
          console.log('An error occurred when requesting to receive the token.', err);
        });
    } else {
      console.log('User Permission Denied.');
    }
  });
};

requestPermission();

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
