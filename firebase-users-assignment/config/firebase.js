import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readFileSync } from "node:fs";

const serviceAccount = JSON.parse(
    readFileSync(new URL("../service.json", import.meta.url), "utf-8")
);

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

console.log("Firebase Admin initialized successfully");

export default db;