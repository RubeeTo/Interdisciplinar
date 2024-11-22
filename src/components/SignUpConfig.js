import { auth, db } from '../configuration/firebaseConfig';

export const addUser = async (email, username, course, password) => {
    try {
        console.log('Iniciando criação do usuário...');
        
      
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        console.log('Usuário autenticado com sucesso:', user.uid);

       
        await db.collection('users').doc(user.uid).set({
            username,
            email,
            course,
            status: 'ativo',
            categoria: 'usuário',
        });
        console.log('Usuário adicionado ao Firestore com sucesso!');
    } catch (error) {
        console.error('Erro durante a criação do usuário:', error.message);
        throw error; 
    }
};
