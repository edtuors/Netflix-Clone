import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";

// Configuração Firebase usando variáveis de ambiente
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    toast.success("Cadastro realizado com sucesso!");
  } catch (error) {
    console.error(error);
    toast.error(`Erro: ${error.code.split('/')[1].split('-').join(" ")}`);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login realizado com sucesso!");
  } catch (error) {
    console.error(error);
    toast.error(`Erro: ${error.code.split('/')[1].split('-').join(" ")}`);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    toast.info("Logout realizado com sucesso!");
  } catch (error) {
    console.error(error);
    toast.error(`Erro: ${error.code}`);
  }
};

export { auth, db, login, signup, logout };
