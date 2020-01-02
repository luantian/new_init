class LocalStorage {

  static setItem(key, val) {
    let v = JSON.stringify(val);
    localStorage.setItem(key, v);
  }

  static getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }

}

export default LocalStorage;
