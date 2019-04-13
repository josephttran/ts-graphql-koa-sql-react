class Auth {
  isAuthenticated = false;

  authenthicate() {
    const token = localStorage.getItem('userToken');

    if (token) {
      this.isAuthenticated = true;
    }
  }

  logout() {
    localStorage.remove('userToken');
    this.isAuthenticated = false;
  }
}

export default new Auth();