import api from '../services/api';

const fakeAuthProvider = {
    isAuthenticated: false,
    signin: (callback) => {
        fakeAuthProvider.isAuthenticated = true;
        localStorage.setItem('token', 'test')
        setTimeout(callback, 100); // fake async
    },
    signout: (callback) => {
        fakeAuthProvider.isAuthenticated = false;
        localStorage.setItem('token', null)
        setTimeout(callback, 100);
    }
};

const authProvider = {
    isAuthenticated: false,
    signin: (username, password, callback) => {
        api.post(`login`, {
            username: username,
            password: password
        }).then((response) => {
            console.log("login")
            localStorage.setItem('token', response.data);
            authProvider.isAuthenticated = true;
            callback();
        }).catch((err) => {
            console.log(err);
            fakeAuthProvider.isAuthenticated = false;
            localStorage.setItem('token', null)
            alert('Erro ao logar') //mudar para mensagem amigavel
        });
    },
    signout: (callback) => {
        fakeAuthProvider.isAuthenticated = false;
        localStorage.setItem('token', null)
        setTimeout(callback, 100);
    }
};

export { fakeAuthProvider, authProvider };
