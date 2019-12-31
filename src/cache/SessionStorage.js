class SessionStorage {

  static setItem(key, val) {
    let v = JSON.stringify(val);
    sessionStorage.setItem(key, v);
  }

  static getItem(key) {
    return JSON.stringify(sessionStorage.getItem(key));
  }

}

export default SessionStorage;
