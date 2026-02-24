// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// นำเข้าบริการอื่นๆ ที่จำเป็นสำหรับทำเว็บรับซื้อเศษเหล็ก
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";       
import { getStorage } from "firebase/storage";  

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDehHQCszWRu8uPxF5LK1EK1QvBH0gheyM",
  authDomain: "recycle-51bd3.firebaseapp.com",
  projectId: "recycle-51bd3",
  storageBucket: "recycle-51bd3.firebasestorage.app",
  messagingSenderId: "1030093992756",
  appId: "1:1030093992756:web:7ae6dbdddc7ec79169eb61",
  measurementId: "G-HF02JPS3PD"
};
// Initialize Firebase
// ใส่คำว่า export เพื่อให้ไฟล์อื่นนำไป import ใช้งานได้
export const app = initializeApp(firebaseConfig);
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

// สร้าง instance สำหรับ Database, Auth และ Storage
export const db = getFirestore(app);       // ใช้สำหรับ เพิ่ม/ลบ/แก้ไข ราคารับซื้อเศษเหล็ก
export const auth = getAuth(app);          // ใช้สำหรับ ระบบล็อคอินเข้าหลังบ้าน (Admin)
export const storage = getStorage(app);    // ใช้สำหรับ อัปโหลดรูปภาพเศษเหล็ก หรือสลิปโอนเงิน