import Base from '@/models/Base'

class Camp extends Base {
  constructor() {
    super()
  }

  static async getList(params, callback) {
    let data = await this.post({
      url: '/campsignup/camplist',
      data: params
    })

    this.success(callback, data);
  }

}

export default Camp;
