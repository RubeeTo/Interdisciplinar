// firebaseMethods.js
import { database } from '../configuration/firebaseConfig'; // Certifique-se de apontar corretamente para sua configuração do Firebase

// Função para adicionar um usuário
export const addUser = async (userId, name, email, curso, status, categoria ) => {
  try {
    await database.ref('users/' + userId).set({
      username: name,
      email: email,
      curso: curso,
      status: 'ativo',
      categoria: 'user'
    });
    console.log(`Usuário ${name} adicionado com sucesso!`);
  } catch (error) {
    console.error('Erro ao adicionar o usuário: ', error);
    throw error; // Lança o erro para ser capturado no App.js
  }
};

