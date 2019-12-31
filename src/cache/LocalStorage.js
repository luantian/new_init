class LocalStorage {

  static setItem(key, val) {
    let v = JSON.stringify(val);
    localStorage.setItem(key, v);
  }

  static getItem(key) {
    return JSON.stringify(localStorage.getItem(key));
  }

}

export default LocalStorage;
