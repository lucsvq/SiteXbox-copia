const usuarios = {
    user1 : {
        email : 'teste@teste',
        senha : '1234',
        username : 'Lucas',
    },
    user2 : {
        email2 : 'teste@teste2',
        senha2 : '12345',
        username2 : 'Rodrigo'
    },
    
};




function login(user1, user2) {
    
    const userBtn = document.querySelector('#userBtn').value;
    const emailBtn = document.querySelector('#emailBtn').value;
    const senhaBtn = document.querySelector('#senhaBtn').value;
    const invalida = document.querySelector('#inval');

    if(emailBtn === usuarios.user1.email && senhaBtn === usuarios.user1.senha && userBtn === usuarios.user1.username) {
        window.location.href = 'adm.html';
    }else if(emailBtn === usuarios.user2.email2 && senhaBtn === usuarios.user2.senha2 && userBtn === usuarios.user2.username2) {
        window.location.href = 'user.html';
    } else {
        invalida.innerHTML = 'user, email ou senha invalido(s)'
    }
    
}






