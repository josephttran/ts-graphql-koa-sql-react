interface IAuthUser {
  id: string;
  email: string;
  token: string;
}

class Auth {
  authenthicate(user: IAuthUser) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', user.token);
  }

  canAuthenticate() {
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    }

    return false;
  }
  
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}

export default new Auth();