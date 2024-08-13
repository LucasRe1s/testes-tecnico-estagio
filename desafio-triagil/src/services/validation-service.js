function validateUsers(users) {
  try {
    const user = isValidString(users);

    if (user === null) {
      throw new Error('Campo obrigatório não preenchido');
    }

    if (typeof user === 'string') {
      return user.trim(); // Retorna o usuário após remover espaços em branco desnecessários
    }

    return user
  } catch (error) {
    throw new Error(error.message)
    
  }

};




function isValidString(user) {
  return typeof user === 'string' && user.trim() !== '';
}



function isValidStringArray(array) {
  if (!Array.isArray(array)) {
    return false; 
  }

  for (const element of array) {
    if (typeof element !== 'string' || element.trim() === '') {
      return false;
    }
  }



 

  return true; // Todos os elementos são strings válidas
}



module.exports = {
  validateUsers, isValidStringArray
}