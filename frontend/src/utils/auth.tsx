class Auth {
  isAuthenticated = false;

  authenthicate() {
    const token = localStorage.getItem('token');

    if (token) {
      this.isAuthenticated = true;
    }
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.isAuthenticated = false;
  }
}

export default new Auth();