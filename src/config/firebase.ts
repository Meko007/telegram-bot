import { initializeApp, cert, ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from '../telegrambot-54c6d-firebase-adminsdk-gnzfg-ad64c9a3f5.json'; // gotten from my firebase DB

initializeApp({
    credential: cert(serviceAccount as ServiceAccount)
});

export const db = getFirestore();