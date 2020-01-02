import Base from '@/models/Base'

class NavBar extends Base {
  constructor() {
    super()
  }

  static async getData(params, callback) {
    let data = await this.post({
      url: 'https://mdip.wemark.tech/Admin/Menu/Mlist',
      data: params
    });

    this.success(callback, data)
  }
}

export default NavBar;
