import Http from '@/Http'
import BaseException from '@/exception/Base'

class Base extends Http {
  constructor() {
    super()
  }

  static api_error(data) {
    console.log('data', data);
    throw new BaseException(data.msg)
  }

  static ajax_error() {
    console.log('ajax请求错误');
  }

  static success(callback, data) {

    if (data.status != 200) return this.ajax_error();

    if (data.data.code != 200) return this.api_error(data.data);

    callback && callback(data.data);

  }
}

export default Base;
