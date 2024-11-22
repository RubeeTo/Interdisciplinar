import firebase from 'firebase/app';
import 'firebase/auth';

// Novas informações baseadas no arquivo antigo
const firebaseConfig = {
  apiKey: "AIzaSyB8iKSRqb4IbVceNNEtwmbs9tM5r0ck4Ag", // Atualizado
  authDomain: "disciplina-83eaf.firebaseapp.com", // Adapte para o novo projeto
  databaseURL: "https://disciplina-83eaf-default-rtdb.firebaseio.com", // URL do novo banco de dados
  projectId: "disciplina-83eaf", // Atualizado
  storageBucket: "disciplina-83eaf.appspot.com", // Atualizado
  messagingSenderId: "621506355309", // Atualizado
  appId: "1:621506355309:android:08d2ee65ff5050492e9f64" // Atualizado
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

firebase.firestore().settings({
  experimentalForceLongPolling: true, 
  merge: true, 
});

firebase.firestore.setLogLevel('debug');

export const database = firebase.database();
export const storage = firebase.storage();
