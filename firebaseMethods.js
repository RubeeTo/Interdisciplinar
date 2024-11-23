// firebaseMethods.js
import { database } from './config/firebase'; // Certifique-se de apontar corretamente para sua configuração do Firebase

// Função para adicionar um usuário
export const addUser = async (userId, name, email) => {
  try {
    await database.ref('users/' + userId).set({
      username: name,
      email: email,
    });
    console.log(`Usuário ${name} adicionado com sucesso!`);
  } catch (error) {
    console.error('Erro ao adicionar o usuário: ', error);
    throw error; // Lança o erro para ser capturado no App.js
  }
};

// Função para editar um usuário (nome e email)
export const editUser = async (userId, newName, newEmail) => {
  try {
    await database.ref('users/' + userId).update({
      username: newName,
      email: newEmail,
    });
    console.log(`Usuário com ID ${userId} editado para ${newName} e email atualizado para ${newEmail}`);
  } catch (error) {
    console.error('Erro ao editar o usuário: ', error);
    throw error; // Lança o erro para ser capturado no App.js
  }
};

// Função para excluir um usuário
export const deleteUser = async (userId) => {
  try {
    await database.ref('users/' + userId).remove();
    console.log(`Usuário com ID ${userId} excluído com sucesso!`);
  } catch (error) {
    console.error('Erro ao excluir o usuário: ', error);
    throw error; // Lança o erro para ser capturado no App.js
  }
};
