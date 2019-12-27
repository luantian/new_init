import Http from '@/models/Http'

class Base  extends Http {
  constructor() {
    super()
  }

  static api_error(data) {
    console.log('data', data);
    console.log(data.msg);
  }

  static ajax_error() {
    console.log('ajax请求错误');
  }

  static success(success, data) {

    if (data.status != 200) return this.ajax_error();

    if (data.data.code != 200) return this.api_error();

    success && success(data.data);

  }
}

export default Base;